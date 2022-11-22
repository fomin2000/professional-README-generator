// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "name",
        type: 'input',
        message: 'What is the name of your project?'
    },
    {
        name: "description",
        type: 'input',
        message: 'Please enter in a project description:'
    },
    {
        name: "installation",
        type: 'input',
        message: 'Enter a series of steps to install the application:'
    },
    {
        name: "usage",
        type: 'input',
        message: 'Enter a series of steps to use the application:'
    },
    {
        name: "contribution",
        type: 'input',
        message: 'Contribution Guidelines:'
    },
    {
        name: "tests",
        type: 'input',
        message: 'Enter testing intructions:'
    },
    {
        name: 'license',
        type: 'list',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License', 'Boost Software License 1.0', 'Creativ Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.0', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        name: 'GitHub',
        type: 'input',
        message: 'GitHub Username:'
    },
    {
        name: 'Email',
        type: 'input',
        message: 'Email Address:'
    },        
];

// TODO: Create a function to write README file
function writeToFile(response) {
    return `
# ${response.name}

## Description

- ${response.description}

## Table Of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation
- ${response.installation}

## Usage
- ${response.usage}

## License
- ${response.license}

## Contribution
- ${response.contribution}

## Tests
- ${response.tests}

## Questions 
- Link to GitHub Portfolio: ${response.GitHub}
- If you have any further questions, feel free to contact at ${response.Email}
`}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        fs.writeFile(`${response.name}.md`, writeToFile(response), (err) => {
            if(err) {
                return console.log(err)
            }
            return console.log('Your README file has been created!')
        })
    })
}

// Function call to initialize app
init();
