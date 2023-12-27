// // main.js
// import * as all from './utils.js';
// import { add, subtract } from './math.js';

// export default all;

// console.log(all.double(2));
// console.log(all.square(2));

// const result1 = add(5, 3);
// console.log(result1); // Output: 8

// const result2 = subtract(10, 4);
// console.log(result2); // Output: 6


let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

console.log(obj);

let x = "Hello";
x = 5;

console.log(x);
