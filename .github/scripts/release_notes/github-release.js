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

const { Octokit, App } = require("octokit");
const { DEFAULT_TIMEZONE } = require('./utils');

async function fetchReleaseInfo(token, owner, repo, capacity = 5) {
    const octokit = new Octokit({
        auth: token,
        timeZone: DEFAULT_TIMEZONE,
        retry: { enabled: true },
    });
    // https://octokit.github.io/rest.js/v20#repos-get-release
    try {
        const response = await octokit.rest.repos.listReleases({
            owner,
            repo,
            capacity,
        });
        return response.data.map((element) => new GithubReleaseInfo(element.published_at, element.body, repo, element.tag_name));
    } catch (e) {
        console.error(e)
        throw Error("Failed to fetch release info from GitHub")
    }
}

class GithubReleaseInfo {
    constructor(published_at, body, repo_name, tag_name) {
        this.published_at = published_at
        this.body = body
        this.repo_name = repo_name
        this.tag_name = tag_name
    }
}

module.exports = {
    fetchReleaseInfo,
    GithubReleaseInfo
}