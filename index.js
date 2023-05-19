const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const path = require("path");
const Circle = require("./library/Circle");
const Square = require("./library/Square");
const Triangle = require("./library/Triangle");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Text must be 3 characters or less.",
    validate: (text) =>
      text.length <= 3 ||
      "Text must be 3 characters or less. Please enter new text.",
  },

  {
    type: "input",
    name: "textColor",
    message: "What color would you like your text to be?",
  },

  {
    type: "list",
    name: "shape",
    message: "What shape would you like your logo to be?",
    choices: ["Circle", "Square", "Triangle"],
  },

  {
    type: "input",
    name: "shapeColor",
    message: "What color would you like your shape to be?",
  },
];

// Function to Write the File
function writeToFile(fileName, data) {
  console.log("Generated logo.svg");
  return fs.writeFileSync(path.join(fileName), data);
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    if (responses.shape == "Circle") {
      var circleSvg = new Circle(
        responses.shapeColor,
        responses.textColor,
        responses.text
      );
      writeToFile("logo.Svg", circleSvg.render());
    }
    if (responses.shape == "Square") {
      var squareSvg = new Square(
        responses.shapeColor,
        responses.textColor,
        responses.text
      );
      writeToFile("logo.Svg", squareSvg.render());
    }
    if (responses.shape == "Triangle") {
      var triangleSvg = new Triangle(
        responses.shapeColor,
        responses.textColor,
        responses.text
      );
      writeToFile("logo.Svg", triangleSvg.render());
    }
  });
}

// Function call to initialize app
init();

// To Do:
// 2. Add an if statement for the text input question to only be 3 characters.
// 3. Add testing via jest
// 4. Do i need a gitignore file? Does it matter how my files are structured?