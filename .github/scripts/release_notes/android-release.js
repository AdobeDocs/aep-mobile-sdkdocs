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

async function fetchMavenArtifactInfo(groupId, count, timestampInMilliseconds) {
    var options = {
        host: 'search.maven.org',
        port: 443,
        timeout: 2000,
        path: `/solrsearch/select?q=g:${groupId}&core=gav&rows=${count}&wt=json`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'server-side',
        }
    };

    console.log(`request options: ${JSON.stringify(options)}`)

    return new Promise((resolve) => {
        var reqGet = https.request(options, function (res) {
            if (res.statusCode != 200) {
                throw new Error(`response statusCode: ${res.statusCode}`)
            }
            console.log(`response statusCode: ${res.statusCode}`)

            var data = [];
            res.on('data', function (chunk) {
                data.push(chunk);
            }).on('end', function () {
                var buffer = Buffer.concat(data);
                var str = new TextDecoder("utf-8").decode(buffer)
                var responseJson = JSON.parse(str)

                var array = []
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

function artifactInfo(timestamp, artifact, version) {
    return {
        "timestamp": timestamp,
        "artifact": artifact,
        "version": version
    }
}

async function fetchAndroidReleaseInfo(token, groupId, timestampInMilliseconds, count = 10) {
    var array = await fetchMavenArtifactInfo(groupId, count, timestampInMilliseconds);
    console.log("fetchMavenArtifactInfo():")
    console.log(array)
    var releaseInfoArray = []
    for (let i = 0; i < array.length; i++) {
        var artifactId = array[i].artifact
        var version = array[i].version
        var info = buildGitHubInfo(artifactId, version)
        if (info != null) {
            releaseInfo = await fetchReleaseInfoWithTagName(token, "adobe", info.repoName, info.tagName);
            // update release info with artifactId, version, and platform
            releaseInfo.version = version
            releaseInfo.extension = artifactIdToExtensionName(artifactId)
            releaseInfo.platform = 'Android'
            releaseInfoArray.push(releaseInfo)
        }
    }
    return releaseInfoArray
}

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
        case "edgeidentity":
        case "analytics":
        case "assurance":
        case "edgebridge":
        case "edgeconsent":
        case "edgemedia":
        case "audience":
        case "campaign":
            return capitalizeFirstLetter(artifactId)
        case "userprofile":
            return "UserProfile"
        default:
            console.log("artifactId not supported: " + artifactId)
            return ''
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
                repoName: `aepsdk-${artifactId}-android`,
                tagName: `${artifactVersion}-${artifactId}`
            }

        case "edge":
        case "optimize":
        // case "places":
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
            return {
                repoName: `aepsdk-${artifactId}-android`,
                tagName: `v${artifactVersion}`
            }
        case "messaging":
        case "campaignclassic":
        case "campaign":
            return {
                repoName: `aepsdk-${artifactId}-android`,
                tagName: artifactVersion
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