const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('\nPlease enter your project title.');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
        validate: descInput => {
            if (descInput) {
              return true;
            } else {
              console.log('\nPlease enter your project title.');
              return false;
            }
          }
    },
    {
        type: "input",
        message: "Please tell us about your project.",
        name: "about",
    },
    {
        type: "input",
        name: "installation",
        message: "Please list installation instructions.",
    },{
        type: "list",
        name: "license",
        message: "Please select the license you used for this project.",
        choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla",
        "MIT",
        "Apache",
        "Boost",
        ],
        validate: LInput => {
            if (LInput) {
              return true;
            } else {
              console.log('\nPlease select a license.');
              return false;
            }
          }
    },{
        type: "input",
        name: "author",
        message: "What is your name?",
    },{
        type: "input",
        name: "username",
        message: "what is your Github username?",
        validate: gitInput => {
            if (gitInput) {
              return true;
            } else {
              console.log('\nPlease enter your GitHub username.');
              return false;
            }
          }
    },{
        type: "input",
        name: "URL",
        message: "What is the URL of the live site?",
    },{
        type: "input",
        name: "repo",
        message: "What is the URL of the github repo?",
        validate: urlInput => {
            if (urlInput) {
              return true;
            } else {
              console.log('\nPlease enter your GitHub URL.');
              return false;
            }
          }
    },
];

module.exports = {
    questions: questions,
  };