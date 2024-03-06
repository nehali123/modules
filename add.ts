
import inquirer from "inquirer";

let answers = await inquirer.prompt ([{

    "name":"age",
    "type":"number",
    "message":"enter your name:",
}])

console.log("Insha Allah, in" + (60-answers.age)+ "years you wil be 60 years old");