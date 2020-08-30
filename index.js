const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown.js")

const thenableWriteREADME = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        name: 'title',
        message: 'What would you like to title your generated README?'
    },
    {
        name: 'description',
        message: 'Please describe the project.'
    },
    {
        name: 'installation',
        message: 'Please describe the installation for the project.'
    },
    {
        name: 'usage',
        message: 'Please provide instructions on how to use the project.'
    },
    {
        name: 'contributing',
        message: 'Would you like to add any other developers that contributed to the project?'
    },
    {
        name: 'tests',
        message: 'Would you like to provide any tests for your project? Provide examples here.'
    }
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){

    return generateMarkdown(data)

    }).then(function(readmeoutput){

        return thenableWriteREADME('./generatedREADME.md', readmeoutput)

    })
}

// function call to initialize program
init();
