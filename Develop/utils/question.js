const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
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
    },{
        type: "input",
        name: "author",
        message: "What is your name?",
    },{
        type: "input",
        name: "username",
        message: "what is your Github username?",
    },{
        type: "input",
        name: "URL",
        message: "What is the URL of the live site?",
    },{
        type: "input",
        name: "repo",
        message: "What is the URL of the github repo?",
    },
];

module.exports = {
    questions: questions,
  };