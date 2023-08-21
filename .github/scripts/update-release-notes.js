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

var https = require('https');
const fs = require("fs");
const execSync = require('child_process').execSync;

const token = process.argv[2];

if(token == undefined) {
    throw new Error("token is undefined")
}

function isEarlierThan24Hours(timestampInMilliseconds) {
    const timestamp = new Date(timestampInMilliseconds);
    const now = new Date();
    return timestamp < now - (24 * 60 * 60 * 1000);
  }

function fetchReleaseNotes(owner,repo, tag, callback) {
    var optionsget = {
        host : 'api.github.com', 
        port : 443,
        path :  `/repos/${owner}/${repo}/releases/tags/${tag}`, 
        method : 'GET',
        headers: {
            'Accept': 'application/vnd.github+json',
            'User-Agent': 'server-side',
            'X-GitHub-Api-Version': '2022-11-28',
            'Authorization': `Bearer ${token}`,
          }
    };
    var reqGet = https.request(optionsget, function(res) {
        // console.log("statusCode: ", res.statusCode);
        var data = [];
        res.on('data', function(chunk) {
            data.push(chunk);
        }).on('end', function() {
            var buffer = Buffer.concat(data);
            str = new TextDecoder("utf-8").decode(buffer)
            responseJson = JSON.parse(str)
            
            callback(responseJson.published_at, responseJson.body)
            
        });
     
    });
     
    reqGet.end();
    reqGet.on('error', function(e) {
        console.error(e);
    });
}


function updateBOMReleaseNotes() {
var optionsget = {
    host : 'search.maven.org', 
    port : 443,
    path :  '/solrsearch/select?q=g:com.adobe.marketing.mobile+AND+a:sdk-bom&core=gav&rows=2&wt=json', 
    method : 'GET',
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'server-side',
      }
};

var reqGet = https.request(optionsget, function(res) {
    // console.log("statusCode: ", res.statusCode);
 
    res.on('data', function(d) {
        str = new TextDecoder("utf-8").decode(d)
        responseJson = JSON.parse(str)

        responseJson.response.docs.forEach(element => {
            if (isEarlierThan24Hours(element.timestamp) == false) {
                if (element.a == 'sdk-bom') {
                    const version = element.v

                    fetchReleaseNotes('adobe','aepsdk-commons',`bom-${version}`, (ios1086DateStr, releaseNotes) => {
                        const date = new Date(ios1086DateStr)
                        const month = date.getMonth()
                        const day = date.getDate()
                        const year = date.getFullYear()
                        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
                        const shortMonth = monthNames[month]
                        //## Aug 8, 2023
                        console.error(`## ${shortMonth} ${day}, ${year}`);
                        //### Android BOM 2.3.1
                        console.error(`### Android BOM  ${version}`);
                        console.error(releaseNotes)

                        const releaseMdPath = "./src/pages/documentation/release-notes/index.md";

                        const releaseNotesHeader = "# Release notes";
                        // Read the contents of the markdown file.
                        const contentArray = fs.readFileSync(releaseMdPath, "utf8").toString().split("\n");
                         // Find the index of the release notes header.
                        const releaseNotesHeaderIndex = contentArray.indexOf(releaseNotesHeader);
                        console.error(releaseNotesHeaderIndex)

                        if (releaseFileContainsLineStartWith(`### Android BOM  ${version}`) == true) {
                            console.error("already updated")
                            return
                        }
                        contentArray.splice(releaseNotesHeaderIndex + 1,0,"",`## ${shortMonth} ${day}, ${year}`,"",`### Android BOM  ${version}`, "",updateBOMReleaseNotesForAdobeIO(releaseNotes));
                        fs.writeFile(releaseMdPath, contentArray.join("\n"), function (err) {
                            if (err) return console.log(err);
                          });
                    })
                }
                
            }
        });
    });
 
});
 
reqGet.end();
reqGet.on('error', function(e) {
    console.error(e);
});

}

function updateBOMReleaseNotesForAdobeIO(releaseNotesString) {
    releaseNotesAsArray = releaseNotesString.split("\n")
    releaseNotesForAdobeIO = []
    releaseNotesForAdobeIO.push("* This BOM ([Bill of Materials](https://central.sonatype.com/artifact/com.adobe.marketing.mobile/sdk-bom)) release includes changes to the following Android extensions.")
    releaseNotesForAdobeIO.push("")
    releaseNotesForAdobeIO.push("<Accordion>")
    releaseNotesForAdobeIO.push("")
    releaseNotesForAdobeIO.push("<AccordionItem header='Expand'>")
    releaseNotesForAdobeIO.push("")
    for(line in releaseNotesAsArray) {
        if (releaseNotesAsArray[line].trim().startsWith("|")) {
            releaseNotesForAdobeIO.push(releaseNotesAsArray[line])
        }
    }
    releaseNotesForAdobeIO.push("")
    releaseNotesForAdobeIO.push("</AccordionItem>")
    releaseNotesForAdobeIO.push("")
    releaseNotesForAdobeIO.push("</Accordion>")
    return releaseNotesForAdobeIO.join("\n")
}

function releaseFileContainsLineStartWith(lineStartWithString){
    try {
        execSync(`grep -E "^${lineStartWithString}" ./src/pages/documentation/release-notes/index.md`, { stdio: 'ignore' });
        return true;
      } catch (e) {
        return false;
      }
}

updateBOMReleaseNotes()
