import inquirer from "inquirer";

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
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Divison") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "modules") {
  console.log(answer.firstNumber % answer.secondNumber);
} else if (answer.operator === "exponentiation") {
  console.log(answer.firstNumber ** answer.secondNumber);
} else {
  console.log("pleas select valid operator.");
}
