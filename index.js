import employees from './data.json' assert { type: 'json'}

import creatPrompt from 'prompt-sync';
let prompt = creatPrompt();

const command = process.argv[2].toLocaleLowerCase();

console.log(process.argv);
process.exit(0);

let employee = {};

let firstName = prompt("First Name: ");
if(!firstName) {
    console.error(`Invalid first Name:`);
    process.exit(1);
}
employee.firstName = firstName;

let lastName = prompt("lastName: ");
if(!lastName) {
    console.error(`Invalid last Name`);cldcl
}
employee.lastName = lastName;

let startDateYear = prompt("Employee Start Year: ");
startDateYear = Number(startDateYear);

if(!Number.isInteger(startDateYear)) {
    console.error(`Enter a valid start date year`);
    process.exit(1);
}
let startDateMonth = prompt("Employee Start Date Month (1-12): ");
startDateMonth = Number(startDateMonth);

if(!Number.isInteger(startDateMonth)) {
    console.error(`Enter a Valid Start Month`);
    process.exit(1);
}
if(startDateMonth < 1 || startDateMonth > 12) {
    console.error(`Enter a Valid start date Month`);
    process.exit(1);
}
let startDateDay = prompt("Employee start Date Day (1-31): ");
startDateDay = Number(startDateDay);

if(!Number.isInteger(startDateDay)) {
    console.error(`Enter a valid start date day`);
    process.exit(1);
}
if(startDateDay < 1 || startDateDay > 31) {
    console.error(`Enter a start date day within the range`);
    process.exit(1);
}
employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);

let isActive = prompt("Is employee active (yes or no): ");

if(isActive !== "yes" && isActive !== "no") {
    console.error(`Enter yes or no for employee active status`);
    process.exit(1);
}
employee.isActive = (isActive === "yes");

const json = JSON.stringify(employee, null, 2);
console.log(`Employee: ${json}`);