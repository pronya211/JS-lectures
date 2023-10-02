let a = 3;
let b = 5;
let c;

c =  a + b;
console.log(c);


function sum(a, b){
    let c = a + b;
    console.log(c);
    
};

function sum2(a, b){
    let c = a + b;
    return c;
    
};

sum(4, 6);
sum(8, 4);

a = 4;
b = 5;

sum(a,b);
sum(sum2(6, 6), b);


function myFn1(a, b){
    let c = a + b;
    console.log(c);
    
};

function myFn2(a, b){
    let c = a + b;
    return c;
    
};

// myFn1(3, 4);

// myFn2(4, 4);
// console.log(myFn2(4, 4));


let myFnVar1 = myFn1(3, 4);
let myFnVar2 = myFn2(4, 4);

console.log(myFnVar1);
console.log(myFnVar2);


function (a, b){
    let c = a + b;
    return c;
    
};

let mySum = function (a, b){
    let c = a + b;
    console.log(c);
    
};

mySum(3,4);

mySum(function (a, b){
    let c = a + b;
    console.log(c);
}, 4);


() => {}

(a, b) => {
    let c = a + b;
    console.log(c);
};

let arrowFn = (a, b) => {
    let c = a + b;
    console.log(c);
};

arrowFn(1, 2);


const funcWithDefaultParams = (a, b = 2) => {
    return a + b;
};

console.log(funcWithDefaultParams(3, 4));
console.log(funcWithDefaultParams(3));
console.log(funcWithDefaultParams("Hello", " world"));


const fnWithReturn = () => {
    for ( let i = 0; i < 10; i++){
        console.log(i);
        if (i === 6){
            return
        };
    };

};

fnWithReturn();


console.log(Date());


const myRequestWithDate = (userName, addedAt = Date()) => {
    let requestBody = {
        username: userName,
        timestamp: addedAt
    };

    requestBody. username = userName;
    requestBody.timestamp = addedAt;

    return requestBody;
};

console.log(myRequestWithDate('Igor', '123331233123'));
console.log(myRequestWithDate('Igor'));
console.log(myRequestWithDate());


function first(){
    console.log('First')
};

first();

function someFn(){
    console.log('hello')
}

setTimeout(someFn, 5000);

console.log('World');


function first(){
    setTimeout(function (){
        console.log('First');
    }, 5000)
};

function second(){
    console.log('Second');
};

first();
second();


function someFnCalllback(p1, callBackFn){
    console.log(`Param1 = ${p1}`);
    callBackFn();
}


function first(someCallback){
    setTimeout(function (){
        console.log('First');
    }, 5000)

    someCallback();
};

function second(){
    console.log('Second');
};

first(second);

