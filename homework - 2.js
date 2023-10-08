// 1. 

function lunch(hamburger, fries){

  if (hamburger >= 4 && fries >= 1){
    console.log('Ми поїли');
 } else {
     console.log('Ми йдемо в інше кафе');
 };

};

lunch(5,1);


// 2.


function somePrice(price){

if (price >= 1000 && price <= 1900){
  console.log(price);
} else {
    console.log('Ціна не входить у вибранний діапазон');
};

};

somePrice(130);


// 3.

function somePrice2(price2){

  if (price2 < 1000 || price2 > 1900){
    console.log(price2);
 } else {
     console.log('Знаходиться між 1000 та 1900');
 };
};

somePrice2(1300);

function somePrice3(price3){

  if (!(price3 >= 1000 && price3 <= 1900)){
    console.log(price3);
 } else {
     console.log('Знаходиться між 1000 та 1900');
 };
};

somePrice3(1130);


// 4.

function season(season){

  if (season == 1){
    console.log('Winter');
} else if (season == 2){
    console.log('Spring');
} else if (season == 3){
    console.log('Summer');
} else if (season == 4){
    console.log('Autumn');
};
};

season(4);


// 5.


function middleVariable1(a, b, c){
  
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

  return middleVariable

};

console.log(middleVariable1(3,6,9));



// 6.

function choseNumber(number){
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
};

choseNumber(2);


// 7.

function calk(num1, num2, operator = '+'){
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

  return answer;
};

console.log(calk(5,15,));


// 8.

function myFun(){
  let myArr = [];

  for( let i = 1; i < 6; i++){
    myArr.push(i)
    
};

return myArr

};

console.log(myFun());


// 9. 

function myFun1(){

  let myArr1 = [];
for( let i = 0; i < 10; i +=2 ){
  if (i === 0){
    continue;
  }
    myArr1.push(i)
};

return myArr1;

};
console.log(myFun1());


function myFun2(){
  let myArr2 = [];
for( let i = 1; i < 10; i +=2 ){
    myArr2.push(i)
};

return myArr2;

};
console.log(myFun2());


// 10.

function myFun3(){

let myArray = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArray.length; i++){
  total += myArray[i];
};

return total;

};
console.log(myFun3());


// 11.
let arr = [ [1, 2], [3, 4], [5, 6] ];

function myFun4(arr){
  for(let i = 0; i < arr.length; i++){

    for(let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    };
  };
}
myFun4(arr);


// 12.

function myFun5(){

  const arr2 = [[1, 2], [3, 4], [5, 6, 7]];

let product = 1;

for(let i = 0; i < arr2.length; i++){

  for(let j = 0; j < arr2[i].length; j++){
      product *= arr2[i][j];
  };
};

return product;

};
console.log(myFun5());


// 13.

function myFun(a){
  let re = /[aeiou]/gi;
let newString = a.replace(re,"");
console.log(newString);
}

myFun1("Developer");



// 14. 

function myFun(meters1){
  let kilometers1 = meters1 / 1000;
let k;
k = kilometers1.toString().replace('.', '')
k = Number(k) % 10;

if (k > 0 && k < 1){
  console.log(`${meters1} метра це ${kilometers1} кілометр`);
} else if (k === 1){
  console.log(`${meters1} метрів це ${kilometers1} кілометр`);
} else if (k >= 2 && k <= 4){
  console.log(`${meters1} метра це ${kilometers1} кілометра`);
} else if (k >= 5 && k <= 10){
  console.log(`${meters1} метрів це ${kilometers1} кілометрів`);
} else {
  console.log('Некоректне значення метрів')
};
}

myFun1(1000);