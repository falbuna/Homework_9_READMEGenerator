// Inquirer Module
const inquirer = require('inquirer');
// Util Module
const util = require('util');
// File System Module
const fs = require('fs');

// Module Export
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
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: [
            'AGPL',
            'GPL',
            'LGPL',
            'MPL',
            'Apache',
            'MIT', 
            'BSL']
    },
    {
        name: 'contributing',
        message: 'Would you like to have any other developers contribute to the project?'
    },
    {
        name: 'tests',
        message: 'Would you like to provide any tests for your project? Provide examples here.'
    },
    {
        name: 'email',
        message: 'What is your email?'
    },
    {
        name: 'github',
        message: 'What is your Github account?'
    }
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
    // Returns the generateMarkdown Module with the user input from questions
    return generateMarkdown(data)

    }).then(function(readmeoutput){

        return thenableWriteREADME('./README.md', readmeoutput)

    })
    .then(function(){
        // If successful, returns Completed.
        console.log('Completed.')
    })
    .catch(function (error){
        // If there is an error, returns An error.
        console.log('An error.', error);
    })
}

// function call to initialize program
init();
