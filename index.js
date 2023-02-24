// const fs = require("fs");
import fs from "fs";
// const path = require('path');
// const inquirer = require("inquirer");
import inquirer from "inquirer";
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "What is the title of the project!",
    "Tell me a little bit more about the project:",
    "What do you need to do to install?",
    "How can I use the application?",
    "How can I contribute?",
    "How to test the application?"
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
