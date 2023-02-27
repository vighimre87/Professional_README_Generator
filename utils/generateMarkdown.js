// function to generate markdown for README
// The links for the badges are coming from the following source: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function generateMarkdown(data) {
  let badgeLink = "";
  switch(data.license) {
    case "MIT":
      badgeLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache 2.0":
      badgeLink = "[![License: Apache: 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU GPL v2":
      badgeLink = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "GNU GPL v3":
      badgeLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "ISC":
      badgeLink = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }
  return `# ${data.title}

  ${badgeLink}

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
  This project is covered under ${data.license} license.

  ## Questions
  If you have got any question feel free to check my GitHub account out on https://github.com/${data.gitHubAccount} or send me an email to the [${data.emailAddress}](mailto:${data.emailAddress}) email address.
`;
}

export default {
  generateMarkdown
}