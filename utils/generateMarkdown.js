// function to generate markdown for README
function generateMarkdown(data) {
  let badgeURL 
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testing}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Questions
  If you have got any question feel free to check my GitHub account out on https://github.com/${data.gitHubAccount} or send me an email to the <mailto:${data.emailAddress}> email address.
`;
}

export default {
  generateMarkdown
}