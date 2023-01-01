// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// TODO: Create an array of questions for user input
const questions = require("./utils/questions").questions;
const license = require("./utils/license").license;
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log("Sorry an error occured : " + error);
        }
    })
}

const createReadme = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
    const ans = await inquirer.prompt(questions);
    ans.license = license(ans.license);
    const markdown = generateMarkdown(ans);
    await createReadme("README1.md",markdown);
} catch (error) {
    console.log('Sorry there was an error.' + error);
  }
}

// Function call to initialize app
init();
