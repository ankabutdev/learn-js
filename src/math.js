// math.js
import all from "./main.js";

console.log(all.PI + " as");
console.log(all.double(2));


export function add(a, b) {
    return a + b;
}
  
export function subtract(a, b) {
    return a - b;
}

export default {add, subtract};

// main.js
// import { PI, square } from './utils';
// import double from './utils'; // Importing the default export

// console.log(PI);           // Output: 3.14
// console.log(square(5));     // Output: 25
// console.log(double(7));     // Output: 14
