// function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data.title)
  // console.log(data.description)
  return `# ${data.title}\n
## Description
${data.description}\n
## Installation
${data.installation}\n
`;
}

module.exports = generateMarkdown;
