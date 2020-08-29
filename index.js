const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        name: 'Title',
        message: 'What is the title of your Application?'
    },
    {
        name: 'Description',
        message: 'Describe the Project'
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
}

// function call to initialize program
init();
