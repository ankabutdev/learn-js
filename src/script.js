function myFunc(){
    document.getElementById("demo").innerHTML = "My Func is working";
};

// var arr = ["Anor","Limon","Banana","Apple"]
// console.log(`\n\t ${arr.join(" ")} \n------------------------------------------------\n`);

// for(x of arr){
//     console.log(x);
// }

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (i % 2 == 0)
//        console.log(element); 
//     else
//         console.log(element);
// }

// arr.forEach(element => {
//     console.log(element);
// });

// console.log(arr.toString());
// console.log();
// console.log(arr);

// console.log(arr.join(", "));
// console.log(arr.shift());
// console.log(arr.unshift("Gilos"));
// console.log(arr);


// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren);

// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter");
// console.log(myChildren);


// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3);
// console.log(citrus);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits = fruits.sort();
// console.log("Sortend =>", fruits);
// fruits.reverse(); 
// console.log("Reverse =>", fruits);

// const numbers = [45, 4, 9, 16, 25];
// numbers.forEach(myFunction);

// function myFunction(value) {
//   console.log(value);
// }

// // console.log(Boolean(10 > 9));

// const numbers = new Set([45, 4, 9, 16, 25]);
// // console.log(numbers.has("ww"));
// for(x of numbers.values()){
//     console.log(x);
// }

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
// for (fruit of fruits){
//   console.log(fruit);
// }
console.log();
let weekends = new Map();
weekends.set(1, "Sunday");
weekends.set(2, "Monday");
weekends.set(3, "Tuesday");
weekends.set(4, "Wednesday");
weekends.set(5, "Thursday");
weekends.set(6, "Friday");
weekends.set(7, "Satuday");

// for(arr of weekends){
//   console.log(arr);
// }

// console.log(weekends.get(1)); // Only key 
// console.log(weekends.size);

// weekends.delete(1); // Delete Sunday key is = 1

// console.log(weekends);

// console.log(weekends.has(1)); // returns false because 1 value is not in array 
// console.log(weekends.has(2)); // returns true because 2 value has in array


// let text = "";
// fruits.forEach (function(value, key) {
//   text += key + ' = ' + value;
// });

// console.log(text);


// let txt = "";
// weekends.forEach(function (value, key){
//   txt += key + ' = ' + value + "\n";
// });

// console.log(txt);


// let text = "";
// for (const x of fruits.entries()) {
//   text += x + "\n";
// }

// console.log(text);

function isArray(array){
  return array.constructor === Array;
};

function isMap(map){
  return map.constructor === Map;
}

var array = [1,2,3,4,5,65,4];


// console.log(isArray(array));

// console.log(isMap(weekends));

// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// person = null;    // Now value is null, but type is still an object

// d = new Date();
// console.log(Number(d));          // returns 1404568027739

// if (!(true ^ false)){
//   console.log("Hehe");
// }
// else if(!(true ^ true)){
// console.log("Hehehehehe");
// }
// else{
//   console.log("Huxu");
// }

// let x = 1 & 1;
// console.log(x);



let str = "Lorem, ipsum dolor aaa sit amet consectetur adipisicing elit. Vero ratione repellendus molestiae optio quam temporibus amet a tempora et soluta sed, ullam illo totam cupiditate deserunt voluptas quaerat in iusto.";

// let c = str.search("aaa");
// console.log(c);

// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");

// console.log(result);

// const sa = /e/.test("The best things in life are free!");
// console.log(sa);

