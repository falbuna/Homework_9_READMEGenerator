// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
![License|${data.license}](https://img.shields.io/badge/License-${data.license}-blue)\n
## Table of Contents
[Description](#Description)\n
[Installation](#Installation)\n
[Usage](#Usage)\n
[License](#License)\n
[Contributing](#Contributing)\n
[Tests](#Tests)\n
[Questions](#Questions)\n
## Description
${data.description}\n
## Installation
${data.installation}\n
## Usage
${data.usage}\n
# License
This project is covered under the ${data.license} license.\n
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
