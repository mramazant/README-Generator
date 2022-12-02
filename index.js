const inquirer = require("inquirer");
const fs = require("fs")


inquirer.prompt(
[
    {
        type: "input",
        message: "What is your Github?",
        name: "GitHub",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your Project Name",
        name: "title",
    },
    {
        type: "input",
        message: "Please write a short description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What kind of licence should your project have",
        name: "licenseType",
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
    },
    {
        type: "input",
        message: "What command should be run the app?",
        name: "usage",    
    },
    {
        type: "input",
        message: "What command should be run test?",
        name: "test",
    },
    {
        type: "input",
        message: "What do users need to know about contributing",
        name: "contribution"
    },
    {
        type: "list",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
        message: "What does the user need to know about using the repo?",
        name: "license",
    }

]
).then ((response) => {
    fs.writeFile("GeneratedREADME/README.md", createREADME(response), (error) => error ? console.log(error) : console.log("Thank you for information")
    );
});

const createREADME = (response) => {
    const selectLicense = () => {
        switch (response.license) {
            case "MIT" : var license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
                return license;
                case "Apache 2.0" : license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                return license;
                case "GPL 3.0" : license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
                return license;
                case "BSD 3" : license = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-"
                return license;
                case "None" : license = ""
                return license;
                default: console.log("Select a license");
        }
        return selectLicense;
    }
    let READMEfile= `
# ${response.title}
${selectLicense()}

## Description 
${response.description}
    
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Test](#test)
* [Contribution](#contribution)
* [Licence](#license)
* [GitHub](#github)
* [Email](#email)

## Installation
\`\`\`${response.installation}\`\`\`

## Usage
\`\`\`${response.usage}\`\`\`

## Test
\`\`\`${response.test}\`\`\`

## Contribution
${response.contribution}

## License
${response.license}

## GitHub
${response.GitHub}

## Email
${response.email}`;



return READMEfile;
}
