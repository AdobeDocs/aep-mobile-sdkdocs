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

// REST API to retrieve release info
// https://docs.github.com/en/free-pro-team@latest/rest/releases/releases?apiVersion=2022-11-28#list-releases
// Example
// https://api.github.com/repos/adobe/aepsdk-react-native/releases?per_page=5
// Example
// https://api.github.com/repos/adobe/aepsdk-react-native/releases/tags/@adobe/react-native-aepcore@5.0.1

// Alternative JS client: https://github.com/octokit/rest.js
// https://octokit.github.io/rest.js/v20#repos-get-release
// octokit.rest.repos.listReleases({
//     owner,
//     repo,
// });

async function fetchReleaseInfo(token, owner, repo, capacity = 5) {
    let options = {
        host: 'api.github.com',
        port: 443,
        timeout: 5000,
        path: `/repos/${owner}/${repo}/releases?per_page=${capacity}`,
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github+json',
            'User-Agent': 'server-side',
            'X-GitHub-Api-Version': '2022-11-28',
            'Authorization': `Bearer ${token}`,
        }
    };

    console.log(`request options: ${JSON.stringify(options)}`)

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
                if (Array.isArray(responseJson) == false) {
                    throw new Error("response JSON is not an array")
                }
                let array = []
                responseJson.forEach(element => {
                    array.push(releaseInfo(element.published_at, element.body, repo, element.tag_name))
                });
                resolve(array)
            });
        });
        reqGet.on('error', function (e) {
            console.error(e);
            throw new Error("Got error response.")
        });
        reqGet.on('timeout', function () {
            reqGet.destroy()
            throw new Error("Request timeout.")
        });
        reqGet.end();
    })
}

async function fetchReleaseInfoWithTagName(token, owner, repo, tag) {
    let options = {
        host: 'api.github.com',
        port: 443,
        timeout: 5000,
        path: `/repos/${owner}/${repo}/releases/tags/${tag}`,
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github+json',
            'User-Agent': 'server-side',
            'X-GitHub-Api-Version': '2022-11-28',
            'Authorization': `Bearer ${token}`,
        }
    };

    console.log(`request options: ${JSON.stringify(options)}`)
    return new Promise((resolve) => {
        let reqGet = https.request(options, function (res) {
            if (res.statusCode != 200) {
                throw Error(`Error: response statusCode: ${res.statusCode}, please check if the tag (${tag}) exists in Github repo.`)
            }
            console.log(`response statusCode: ${res.statusCode}`)

            let data = [];
            res.on('data', function (chunk) {
                data.push(chunk);
            }).on('end', function () {
                let buffer = Buffer.concat(data);
                let str = new TextDecoder("utf-8").decode(buffer)
                let responseJson = JSON.parse(str)
                resolve(releaseInfo(responseJson.published_at, responseJson.body, repo, responseJson.tag_name))
            });
        });
        reqGet.on('error', function (e) {
            console.error(e);
            throw new Error("Got error response.")
        });
        reqGet.on('timeout', function () {
            reqGet.destroy()
            throw new Error("Request timeout.")
        });
        reqGet.end();
    })

}

function releaseInfo(published_at, body, repo_name, tag_name) {
    return {
        "published_at": published_at,
        "body": body,
        "repo_name": repo_name,
        "tag_name": tag_name
    }
}

module.exports = {
    fetchReleaseInfo,
    fetchReleaseInfoWithTagName
}