// 1. 

let hamburger = 4;
let fries = 1;

if (hamburger >= 4 && fries >= 1){
   console.log('Ми поїли');
} else {
    console.log('Ми йдемо в інше кафе');
};


// 2.

let price = 1300;

if (price >= 1000 && price <= 1900){
    console.log(price);
 } else {
     console.log('Ціна не входить у вибранний діапазон');
 };



// 3.

let price2 = 19;

if (price2 < 1000 || price2 > 1900){
    console.log(price2);
 } else {
     console.log('Знаходиться між 1000 та 1900');
 };

 let price3 = 11300;

 if (!(price3 >= 1000 && price3 <= 1900)){
    console.log(price3);
 } else {
     console.log('Знаходиться між 1000 та 1900');
 };



 // 4.

let season = 4;

if (season == 1){
    console.log('Winter');
} else if (season == 2){
    console.log('Spring');
} else if (season == 3){
    console.log('Summer');
} else if (season == 4){
    console.log('Autumn');
};


// 5. 

let a = 3;
let b = 6;
let c = 9;

let middleVariable; 

if (a > b) {
  if (b > c) {
    middleVariable = b;
  } else if (a > c) {
    middleVariable = c;
  } else {
    middleVariable = a;
  }
} else {
  if (a > c) {
    middleVariable = a;
  } else if (b > c) {
    middleVariable = c;
  } else {
    middleVariable = b;
  }
}
console.log(middleVariable);

// 6.

let number =5;
switch(number){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday'); 
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');   
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Not a day');
        break;              
};


// 7. 

let num1 = 10; 
let num2 = 5;  
let operator = '*'; 
let answer;

switch (operator) {
  case '+':
    answer = num1 + num2;
    break;
  case '-':
    answer = num1 - num2;
    break;
  case '*':
    answer = num1 * num2;
    break;
  case '/':
    answer = num1 / num2;
    break;
  default:
    console.log('Чекайте оновленння');
    break;
}
console.log(answer);


// 8. 

let myArr = [];
for( let i = 1; i < 6; i++){
    myArr.push(i)
};

console.log(myArr);


// 9.

let myArr1 = [];
for( let i = 0; i < 10; i +=2 ){
  if (i === 0){
    continue;
  }
    myArr1.push(i)
};

console.log(myArr1);

let myArr2 = [];
for( let i = 1; i < 10; i +=2 ){
    myArr2.push(i)
};

console.log(myArr2);


// 10.

let myArray = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArray.length; i++){
  total += myArray[i];
};

console.log(total);


// 11.

let arr = [ [1, 2], [3, 4], [5, 6] ];

for(let i = 0; i < arr.length; i++){

  for(let j = 0; j < arr[i].length; j++){
      console.log(arr[i][j]);
  };
};


// 12.

const arr2 = [[1, 2], [3, 4], [5, 6, 7]];

let product = 1;

for(let i = 0; i < arr2.length; i++){

  for(let j = 0; j < arr2[i].length; j++){
      product *= arr2[i][j];
  };
};

console.log(product);

// 13.

let re = /[aeiou]/gi;
let someString = "Developer";
let newString = someString.replace(re,"");
console.log(newString);


// 14.

let meters1 = 46;
let kilometers1 = meters1 / 1000;
let k;
k = kilometers1.toString().replace('.', '')
k = Number(k) % 10;

if (k > 0 && k < 1){
  console.log(`${meters1} метра це ${kilometers1} кілометр`);
} else if (k === 1){
  console.log(`${meters1} метрів це 1 кілометр`);
} else if (k >= 2 && k <= 4){
  console.log(`${meters1} метра це ${kilometers1} кілометра`);
} else if (k >= 5 && k <= 10){
  console.log(`${meters1} метрів це ${kilometers1} кілометрів`);
} else {
  console.log('Некоректне значення метрів')
};