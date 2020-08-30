// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
## Description
${data.description}\n
## Installation
${data.installation}\n
## Usage
${data.usage}\n
# License
${data.license}\n
## Contributing
${data.contributing}\n
## Tests
${data.tests}\n
## Questions
If you have any questions regarding this project or README, please reach me at: ${data.email}\n
My Github can be found here: [https://github.com/${data.github}/](https://github.com/${data.github}/)
`;
}

module.exports = generateMarkdown;
