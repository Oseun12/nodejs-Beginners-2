import fs from 'node:fs/promises';

const json = {
  "id": 0,
  "email": "lamb_mcclain@globomantics.com",
  "firstName": "Lamb",
  "lastName": "Mcclain",
  "dateBirth": "1988-08-01",
  "startDate": "2001-05-22",
  "isActive": false
}

const data = JSON.stringify(json);
// fs.writeFile("./file1.json", data)
//   .then(() => {
//     console.log("File written");
//   });

export async function calculate(x, y) {
  return x + y;
}

const result = await calculate(2, 5);
console.log('result => ', result)


