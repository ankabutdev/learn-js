function myFunc(){
    document.getElementById("demo").innerHTML = "My Func is working";
}

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

function myFunction(value) {
  console.log(value);
}

// console.log(Boolean(10 > 9));

const numbers = new Set([45, 4, 9, 16, 25]);
// console.log(numbers.has("ww"));
for(x of numbers.values()){
    console.log(x);
}