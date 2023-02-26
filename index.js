// const fs = require("fs");
import fs from "fs";
// const path = require('path');
// const inquirer = require("inquirer");
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// array of questions for user
const questions = [
    "What is the title of the project?",
    "Tell me a little bit more about this project:",
    "How do I install this project?",
    "How can I use the application?",
    "How can I contribute?",
    "How can I test the application?",
    "Who did/does participate in this project?",
    "Select which license would you like:",
    "What is your GitHub username?",
    "What is your email address?"
];



// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Success");
  })
}

// function to initialize program
function init() {
    inquirer.prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
    },
    {
        type: "input",
        message: questions[1],
        name: "description"
    },
    {
        type: "input",
        message: questions[2],
        name: "installation",
        default: "N/A"
    },
    {
        type: "input",
        message: questions[3],
        name: "usage",
    },
    {
        type: "input",
        message: questions[4],
        name: "contribution",
        default: "N/A"
    },
    {
      type: "input",
      message: questions[5],
      name: "testing",
      default: "N/A"
    },
    {
      type: "input",
      message: questions[6],
      name: "credits",
      default: "N/A"
    },
    {
      type: "list",
      message: questions[7],
      name: "license",
      choices: ["MIT", "Apache 2.0", "GNU GPL v2", "GNU GPL v3", "ISC"]
    },
    {
      type: "input",
      message: questions[8],
      name: "gitHubAccount",
  },
  {
    type: "input",
    message: questions[9],
    name: "emailAddress",
},
    ]).then((response)=> {
      console.log(response);
      const readmeTemplate = generateMarkdown.generateMarkdown(response);
      writeToFile("README.md", readmeTemplate);
    })
}

// function call to initialize program
init();
