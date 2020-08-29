const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');

const writeREADME = util.promisify(fs.writeFile);

function getREADMEOutput(questions){
    const title = questions.Title;
    const description = questions.Description;

    return `# ${title} \n## Description\n${description}
    
    `;
}

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
    .then(function(questions){
        return getREADMEOutput(questions)
    })
    .then(function(READMEOutput){
        return writeREADME('./README.md', READMEOutput);
    })
}

// function call to initialize program
init();
