const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown.js")

const writeREADME = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        name: 'title',
        message: 'What would you like to title of your README?'
    },
    {
        name: 'description',
        message: 'Please describe the Project.'
    }
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        const readme = generateMarkdown(data)

        console.log(readme)
        return writeToFile(readme)
    })
}

// function call to initialize program
init();
