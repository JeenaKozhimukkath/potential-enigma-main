
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title
  ${data.title}
  ${data.getLicense}

  # Description
  ${data.description}

  #Table of Contents

  1. [About](#About)
  2. [Installation](#Installation)
  3. [License](#License)
  4. [Tests](#Test)
  5. [Author](#Author)
  6. [Contact](#Contact Information)
  7. [Links](#Links)

  ## About
  ${data.about}

  ## Installation
  ${data.installaton}

  ## License
  ${data.license}

  ## Author
  ${data.author}

  ## Contact Information
  Github Username: ${data.username}

  ## Links
  Github repo: ${data.repo}
  Live site: ${data.URL}

`;
}

module.exports = generateMarkdown;
