let number = 5;
let floatNumber = 5.5;

console.log(4/0); //Infinity
console.log(-4/0); //-Infinity
console.log('string' * 8); //Nan

let exist = true;
let notExist = false;

console.log(qweqwe);
let value = null;
console.log(value);

let undef;
console.log(undef);

let object = {};

let person = {
    name: "Igor",
    age: 29,
    jobTitel: "QA"
};

let person1 = new Object ();

//console.log(object);
//console.log(person);
//console.log(person1);

person1.name = "Bill";
person1.age = 21
person1.hairColor = "black"

//console.log(person1);

console.log("My name is " + person1.name);
console.log(`My name is + ${person1.name}`);

console.log("My name is " + person1.name + " my age is " + person1.age + " my hair color is " + person1.hairColor);
console.log(`My name is ${person1.name} my age is ${person1.age} my hair color is ${person1.hairColor}`);

let arr = [];
let arrr = ['text', 'some text', 6, {age: 30}, []];

console.log(arrr[0]);
console.log(arrr[2]);

let arrrr = new Array()
console.log(arrrr);


let numArr = [2, 3, 1];
let numObj = {b: 2, c: 3, a: 1};

console.log(numArr[0]);
console.log(numObj.a);

let salr1 = {
    Anna: 1000,
    Vlada: 1200
};

let someArr = [1, 2, 3, 4];

let someArrObj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4
};

console.log(someArr[0]);
console.log(someArrObj[0]);


let somePerson = {
    name: "Igor",
    age: 29,
    jobTitel: "QA"
};

console.log(somePerson["name"]);
console.log(somePerson.age);


let objObj = {
    a: 1,
    name: 'Name',
    c:{
        someKey: {
            someKey: 123,
            key1: "qweqwe"
        }
    },
    d: [1, "qwe", {name: "Name"}]
};

console.log(objObj.a);
console.log(objObj.c.someKey.key1);
console.log(objObj.d[2].name);

let name = {name: "Name" };
console.log(name.name);


let someText = " Hello world!! ";

console.log(someText.length);
console.log(someText.substring(1, 6));
console.log(someText.toUpperCase());
console.log(someText.toLowerCase());
console.log(someText.indexOf('H'));
console.log(someText.charAt(1));
console.log(someText[1]);


let myArr = [];

myArr.push('  ');
myArr.push('Hello');
myArr.push('  ');
myArr.push('world');
myArr.push('  ');

console.log(myArr);
console.log(myArr.length);
console.log(myArr.join(" "));
console.log(myArr.pop());
console.log(myArr.pop());
console.log(myArr);


let nm = 8734609301;
console.log(`${nm}`);


let numStr = '10';
console.log(parseInt(numStr) + 10);

let resolution = '12.5px';
console.log(parseInt(resolution));
console.log(parseFloat(resolution));