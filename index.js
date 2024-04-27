#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n                              BMI CALCULATOR  \n"));
const answer = await inquirer.prompt([
    {
        type: 'string',
        name: 'name',
        message: 'Enter your name: '
    },
    {
        type: 'number',
        name: 'weight',
        message: 'Enter your weight in Kilogram (Kg):'
    },
    {
        type: 'number',
        name: 'height',
        message: 'Enter your height in Meter (m):'
    },
]);
const calculateBMI = (weight, height) => weight / (height * height);
const bmi = calculateBMI(answer.weight, answer.height);
let bmiCategory = '';
if (bmi < 18.5) {
    bmiCategory = 'Underweight';
}
else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'Normal weight';
}
else if (bmi >= 24.9 && bmi < 29.9) {
    bmiCategory = 'Overweight';
}
else {
    bmiCategory = 'Obesity';
}
console.log(chalk.green(`\nDear ${answer.name}, your BMI is ${bmi.toFixed(2)}`));
console.log(chalk.green(`Your BMI Category is "${bmiCategory}"`));
// Use this command "tsc && node index.js" to excute the code. 
