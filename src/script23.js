// "use strict";

// x = 3.14;
// console.log(x);

// function printHelloJavascript(){
//     console.log("Hello Javascript!");
// }

// printHelloJavascript();

// var result = delete printHelloJavascript; // not working
// console.log(result);
     

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

// console.log(person.fullName());

// person.forEach(element => {
//     console.log(element.age);
// });

// for (x in person){
//     console.log(`${x.id},
//                  ${x.firstName},
//                  ${x.lastName},
//                  ${x.email},
//                  ${x.age},`);
// };


// person.forEach(element => {
//     console.log(`${element.id},
//                  ${element.firstName},
//                  ${element.lastName},
//                  ${element.email},
//                  ${element.age},`);
// });

const member = {
    firstName: "Jhon",
    lastName:"Doe"
};


// function Hellofunc(name){
//     console.log(`Hello, ${name}! My name is ${this.firstName}`);
// }

// var resHello = Hellofunc.bind(member, "Salohiddin");
// resHello();

// // console.log(person.fullName.bind({firstName:"Salom",lastName:"Hammaga"})());

// // console.log(person.fullName.bind(member)());

// function greet(name) {
//     console.log(`Hello, ${name}! My name is ${this.fullName()}.`);
// }
  
// const greetPerson = greet.bind(person, 'Alice');
  
// greetPerson();


// console.log(person.fullName.call(person));

// hello = () =>{
//     return "Hello World!";
// }

// console.log(hello());


// hello = function() {
//     document.getElementById("demo").innerHTML += this;
// }
// window.addEventListener("load", hello);

// document.getElementById("btn").addEventListener("click", hello);



// const data = new Date();

// console.log(data.toUTCString());
// console.log(data.toLocaleString());


// const m = new Car("Json", 2004);
// console.log(m.age());


// const t = ["j", 1];

// console.log(typeof(m));
// console.log(typeof(t));

// for(x of t){
//     console.log(x);
// }


class Car
{
    constructor(name, year)
    {
        this.name = name;
        this.year = year;
    }
    static age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let car1 = new Car("BMW", 2023);
let car2 = new Car("BMW", 2022);

// console.log(car1);
// console.log(car2);

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";






