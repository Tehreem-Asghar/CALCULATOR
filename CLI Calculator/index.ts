#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function calculator() {
  const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter 2nd Number", type: "number", name: "secondNumber" },
    {
      message: "Select one of the  operator to perform Operation",
      type: "list",
      name: "operator",
      choices: [
        "Addition",
        "subtraction",
        "multiplication",
        "Divison",
        "modules",
        "exponentiation",
      ],
    },
  ]);

  if (answer.operator === "Addition") {
    console.log(
      chalk.bgGreen.white.bold(answer.firstNumber + answer.secondNumber)
    );
  } else if (answer.operator === "subtraction") {
    console.log(
      chalk.bgYellow.bold.blue(answer.firstNumber - answer.secondNumber)
    );
  } else if (answer.operator === "multiplication") {
    console.log(
      chalk.bgCyan.gray.bold(answer.firstNumber * answer.secondNumber)
    );
  } else if (answer.operator === "Divison") {
    console.log(
      chalk.bgGreenBright.white.bold(answer.firstNumber / answer.secondNumber)
    );
  } else if (answer.operator === "modules") {
    console.log(
      chalk.bgBlueBright.magenta.bold(answer.firstNumber % answer.secondNumber)
    );
  } else if (answer.operator === "exponentiation") {
    console.log(
      chalk.bgRedBright.black.bold(answer.firstNumber ** answer.secondNumber)
    );
  } else {
    console.log("pleas select valid operator.");
  }

  let again = await inquirer.prompt([
    {
      message: "Do you Want To perform Another Calculation?",
      type: "list",
      name: "Again",
      choices: ["Yes", "No"],
    },
  ]);

  if (again.Again === "Yes") {
    calculator();
  }else{
    console.log("Goodbye!");
  }
}
calculator();
