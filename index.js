// const fs = require("fs");
import fs from "fs";
// const path = require('path');
// const inquirer = require("inquirer");
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// array of questions for user
const questions = [
    "What is the title of the project?",
    "Tell me a little bit more about the project:",
    "What do you need to do to install?",
    "How can I use the application?",
    "How can I contribute?",
    "How to test the application?"
];



// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}.md`, data, (err) => {
    err ? console.error(err) : console.log("Success");
  })
}

// function to initialize program
function init() {
    inquirer.prompt([
      {
        type: "input",
        message: questions[0],
        name: "title"
    },
    {
        type: "input",
        message: questions[1],
        name: "description"
    },
    {
        type: "input",
        message: questions[2],
        name: "installation"
    },
    {
        type: "input",
        message: questions[3],
        name: "usage"
    },
    {
        type: "input",
        message: questions[4],
        name: "contribution"
    },
    {
      type: "input",
      message: questions[5],
      name: "testing"
    }
    ]).then((response)=> {
      console.log(response);
      const readmeTemplate = generateMarkdown.generateMarkdown(response);
      writeToFile(response.title, readmeTemplate);
    })
}

// function call to initialize program
init();
