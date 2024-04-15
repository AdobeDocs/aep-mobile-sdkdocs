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

const { Octokit } = require("octokit");
const { DEFAULT_TIMEZONE } = require('./utils');

/**
 * Fetches release information from GitHub.
 *
 * @param {string} token - The GitHub authentication token.
 * @param {string} owner - The owner of the repository.
 * @param {string} repo - The name of the repository.
 * @param {number} [capacity=5] - The maximum number of releases to fetch.
 * @returns {Promise<Array<GithubReleaseInfo>>} - A promise that resolves to an array of GithubReleaseInfo objects.
 * @throws {Error} - Throw an error if failed to fetch the release info from GitHub.
 */
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


/**
 * Represents information about a GitHub release.
 * @class
 */
class GithubReleaseInfo {
    /**
     * Creates a new instance of the GithubReleaseInfo class.
     * @param {string} published_at - The date and time when the release was published.
     * @param {string} body - The body content of the release.
     * @param {string} repo_name - The name of the repository.
     * @param {string} tag_name - The tag name of the release.
     */
    constructor(published_at, body, repo_name, tag_name) {
        this.published_at = published_at;
        this.body = body;
        this.repo_name = repo_name;
        this.tag_name = tag_name;
    }
}

module.exports = {
    fetchReleaseInfo,
    GithubReleaseInfo
}