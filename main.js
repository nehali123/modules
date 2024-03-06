/*import chalk from "chalk";
import inquirer from "inquirer";

let answers = await inquirer.prompt ([{

    "name":"age",
    "type":"number",
    "message":"enter your name:",
}])

console.log(chalk.yellow("Insha Allah, in" + (60-answers.age)+ "years you wil be 60 years old"));*/
import chalk from "chalk";
console.log(chalk.blue("hello, ") + chalk.yellow("world"));
console.log((chalk.red.bold)("This is an Error message!"));
