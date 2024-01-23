let firstName = "David";
let lastName = "Tucker";
let upperCaseName = firstName.toUpperCase();
let fullName = upperCaseName + " " + lastName;
console.log(`Hello ${fullName}`);

console.log("Hello");
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
};
let numYearsService = 6;
let dateBirth = new Date("january 14, 1972");
numYearsService = 7;
console.log(`${numYearsService}, ${dateBirth}`);
 console.log(`You are there`);
 let bio = "Father \nSon \nHoly Ghost \nAMEN";
 
 let quote = `He has so much to share with my people, if only they can be offered a bottle of drink.`;

 console.log(`${bio} ${quote}`);
 
 let length = quote.length
 console.log(`quote lenght: ${length}`);
 let secondCharacter = quote[1];
 console.log(`Second Character: ${secondCharacter}`);
 let idx1 = fullName.indexOf("DAV");
 let idx2 = fullName.indexOf("ker");
 console.log(`Index 1: ${idx1} Index 2: ${idx2}`);
 let doesContain = fullName.includes("DAV");
 console.log(doesContain);
 let notTrue = !true;
 console.log(notTrue);

 let num1 = 230093830398498387028;
 let num2 = 1.938484387824784789274;
 console.log(num1);
 console.log(num2);
 console.log(`Minimun Value: ${Number.MIN_VALUE}`);
 let obj1 = {};
 obj1.firstName = "David";
 obj1.lastName = "Tucker";
 obj1.isActive = true;
 obj1.startDate = new Date("January 19, 2004");
 obj1.vacationDays = 24;
 console.log(obj1);
 delete obj1.lastName;
 console.log(obj1);
 obj1.lastName = "Tucker";
 console.log(obj1);
 let date1 = new Date();
 console.log(date1);
 console.log(`Full Year: ${date1.getFullYear()}`);
 let getTime = new Date();
 console.log(getTime);
 let bool1 = 1;
 let bool2 = 0;
 bool1 = Boolean(bool1);
 bool2 = Boolean(bool2);
 console.log(`Num: ${bool1} Num2: ${bool2}`);

 let employee = {
    firstName: "David",
    lastName: "Tucker",
    startDate: new Date("February 15, 2016"),
    numYearsService: 7,
    department: "Engineering",
    title: "VP Engineering",
    isActive: true,
    salary: 100000
 };
 let jsonValue = JSON.stringify(employee);
 console.log(jsonValue);
 jsonValue = JSON.stringify(employee, null, 2);
 console.log(jsonValue);
  
 let newObj= JSON.parse(jsonValue);
 console.log(newObj);

 let jsonString = `{
        "firstName": "David",
        "lastName": "Tucker"
 }`;
 let Obj = JSON.parse(jsonString);
 console.log(Obj);

 let num3 = 7.9734837;
 console.log(`Round: ${Math.round(num3)}`);
 console.log(`Ceiling: ${Math.ceil(num3)}`);
 console.log(`floor: ${Math.floor(num3)}`);
 let num4 = 1_000_000;
 let convert = num4.toLocaleString('en-US');
 console.log(convert);

 let date2 = new Date();
 console.log(date2);
 console.log(`Calendar Dates: ${date2.toDateString()}`);
 let options = {
    timeStyle: "short",
    dateStyle: "short"
 };
 console.log(`Custom Date: ${date2.toLocaleString('ar-KW', options)}`);
 let example1 = ("Hello" === "Hi");
 let example2 = ("Hello" == "Hi");
 console.log(`example1: ${example1} example2: ${example2}`);
 let badgeColor;
 if (numYearsService < 5) {
    badgeColor = "blue";
 }
 else if (numYearsService < 10) {
    badgeColor = "yellow";
 }
 else if (numYearsService < 15) {
    badgeColor = "red";
 }
 else if(numYearsService < 20) {
    badgeColor = "purple";
 }
 else {
    badgeColor = "silver"
 }
 console.log(`Years of Service: ${numYearsService} BadgeColor: ${badgeColor}`);
const isTruthy = (name, exp) =>{
    console.log(`${name}: ${Boolean(exp)}`);
}
 isTruthy("val11", 0);
 employee.annualBonus = (employee.numYearsService > 5) ? 1000 : 500;
 console.log(`employee Annual Bonus: ${employee.annualBonus} `)

 let arr1 = [];
 let arr2 = ["Item1", "Item2"];
 let arr3 = new Array();
 let arr4 = new Array("Item1", "Item2");

 let names = ["David", "Kim", "Deborah", "Akeem"];
 console.log(`Names: ${names}`);
 console.log(`Names Length: ${names.length}`);
 names.push("Shannon");
 console.log(names);
 names.unshift("Sewanu");
 console.log(names);

 const obj4 = {
   firstName: "David",
   lastName: "Tucker"
 }
 const obj5 = {
   firstName: "Sarah",
   lastName: "Jerkins"
 }
 const obj6 = {
   firstName: "David",
   lastName: "Tucker"
 }
 const employees = [ obj4, obj5 ];
 console.log(`Is identical object in array: ${employees.includes(obj6)}`);

 let x = 10;
 while(x > 0) {
   console.log(x);
   --x;
 }
 let x1 = 10;
 do {
   console.log(x1);
   --x1
 } while(x > 0);
