/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const https = require('https');
const { fetchReleaseInfoWithTagName } = require('./github-release');
const { capitalizeFirstLetter } = require('./utils');

// Maven Search REST API
// https://central.sonatype.org/search/rest-api-guide/

// Fetch the latest Android artifacts from Maven Central
async function fetchMavenArtifactInfo(groupId, capacity, timestampInMilliseconds) {
    let options = {
        host: 'search.maven.org',
        port: 443,
        timeout: 5000,
        path: `/solrsearch/select?q=g:${groupId}&core=gav&rows=${capacity}&wt=json`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'server-side',
        }
    };

    console.log(`request options: ${JSON.stringify(options)}`)

    // TODO: condiser refactoring the code blow with libraries like axios.
    return new Promise((resolve) => {
        let reqGet = https.request(options, function (res) {
            if (res.statusCode != 200) {
                throw new Error(`response statusCode: ${res.statusCode}`)
            }
            console.log(`response statusCode: ${res.statusCode}`)

            let data = [];
            res.on('data', function (chunk) {
                data.push(chunk);
            }).on('end', function () {
                let buffer = Buffer.concat(data);
                let str = new TextDecoder("utf-8").decode(buffer)
                let responseJson = JSON.parse(str)

                let array = []
                responseJson.response.docs.forEach(element => {
                    if (timestampInMilliseconds < element.timestamp) {
                        array.push(artifactInfo(element.timestamp, element.a, element.v))
                    }
                });
                resolve(array)
            });
        });
        reqGet.on('error', function (e) {
            console.error(e)
            throw new Error("Got error response.")
        });
        reqGet.on('timeout', function () {
            reqGet.destroy()
            throw new Error("Request timeout.")
        });
        reqGet.end();
    })

}

function artifactInfo(timestamp, artifactId, version) {
    return {
        "timestamp": timestamp,
        "artifactId": artifactId,
        "version": version
    }
}

// Fetch the latest Android release info from GitHub
async function fetchAndroidReleaseInfo(token, groupId, timestampInMilliseconds, capacity = 25) {
    let array = await fetchMavenArtifactInfo(groupId, capacity, timestampInMilliseconds);
    console.log("fetchMavenArtifactInfo():")
    console.log(array)
    let releaseInfoArray = await Promise.all(array.map(async (item) => {
        let artifactId = item.artifactId;
        let version = item.version;
        let extensionName = artifactIdToExtensionName(artifactId);
        if (extensionName == null) {
            return null;
        }
        let info = buildGitHubInfo(artifactId, version);
        if (info == null) {
            return null;
        }
        let releaseInfo = await fetchReleaseInfoWithTagName(token, "adobe", info.repoName, info.tagName);
        // update release info with extension, version, and platform
        releaseInfo.version = version;
        releaseInfo.extension = extensionName;
        releaseInfo.platform = 'Android';
        return releaseInfo;
    }));
    return releaseInfoArray
}

// Convert artifactId to extension name. The extension name is used to generate the release title.
function artifactIdToExtensionName(artifactId) {
    switch (artifactId) {
        case "sdk-bom":
            return "BOM"
        case "campaignclassic":
            return "Campaign Classic"
        case "campaign":
            return "Campaign Standard"
        case "core":
        case "lifecycle":
        case "identity":
        case "signal":
        case "edge":
        case "optimize":
        case "places":
        case "media":
        case "target":
        case "analytics":
        case "assurance":
        case "audience":
        case "campaign":
        case "messaging":
            return capitalizeFirstLetter(artifactId)
        case "userprofile":
            return "UserProfile"
        case "edgeconsent":
            return "EdgeConsent"
        case "edgeidentity":
            return "EdgeIdentity"
        case "edgebridge":
            return "EdgeBridge"
        case "edgemedia":
            return "EdgeMedia"
        default:
            console.log("artifactId not supported: " + artifactId)
            return null
    }
}

function buildGitHubInfo(artifactId, artifactVersion) {
    switch (artifactId) {
        case "sdk-bom":
            return {
                repoName: "aepsdk-commons",
                tagName: "bom-" + artifactVersion
            }

        case "core":
        case "lifecycle":
        case "identity":
        case "signal":
            return {
                repoName: `aepsdk-core-android`,
                tagName: `v${artifactVersion}-${artifactId}`
            }

        case "edge":
        case "optimize":
        case "places":
        case "media":
        case "target":
        case "edgeidentity":
        case "analytics":
        case "assurance":
        case "edgebridge":
        case "edgeconsent":
        case "edgemedia":
        case "audience":
        case "userprofile":
        case "messaging":
        case "campaignclassic":
        case "campaign":
            return {
                repoName: `aepsdk-${artifactId}-android`,
                tagName: `v${artifactVersion}`
            }

        default:
            console.log("artifactId not supported: " + artifactId)
            return null
    }
}

module.exports = {
    fetchMavenArtifactInfo,
    fetchAndroidReleaseInfo
}
