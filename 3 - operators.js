// + 

console.log('string ' + '- string');

console.log(2 + 2);

console.log(2 + '2');

console.log(2 + + '2');

let incr = 10;
let decr = 10;

//incr++
//decr--
console.log(`incr ${incr}`);
console.log(`decr ${decr}`);

console.log(`incr ${incr++}`);
console.log(`decr ${decr--}`);

let increm = 10;
let decrem = 10;

//++increm
//--decrem

console.log(`increm ${increm}`);
console.log(`decrem ${decrem}`);

console.log(`increm ${++increm}`);
console.log(`decrem ${--decrem}`);


// < >

console.log( 5 < 2);
console.log( 5 > 2);

console.log( 5 % 2);
console.log( 9 % 3);



let x = 10;
let y = 5;
// +=

x += y; // x = x + y;
console.log(x);

// *=
x *= y; // x = x * y;
console.log(x);

// -=
x -= y; // x = x - y;
console.log(x);

// /=
x /= y; // x = x / y;
console.log(x);

// %=
x %= y; // x = x % y;
console.log(x);

// = присвоєння
// == порівняння
// === строге порівняння

console.log(2 * 4 = 8);
console.log(2 * 4 == 8);
console.log(2 * 4 == '8');
console.log(2 * 4 === '8');


// && - логічне "і"
// || - логічне "або"

let isCjecked = false;
let isClosed = false;

console.log(isCjecked && isClosed);  // false && false => false; true && false => false; true && true => true;
console.log(isCjecked || isClosed);  // false || false => false; true || true => false; true || true => true;


// ! - заперечення 

console.log(isCjecked || !isClosed);


// Я хочу купити картоплю фрі та гамбургер, якщо обидві страви є в наявності, то я їх куплю і буду ситий. 

let hamburger2 = true;
let fries2 = true;

if (hamburger2 && fries2){
    console.log('Я ситий')
} else {
    console.log('Я голодний')
};


let hamburger1 = 1;    // 0, null, undefined, '', NaN => false
let fries1 = 5;

if (hamburger1 && fries1){
    console.log('Я ситий')
} else {
    console.log('Я голодний')
};

// Я хочу купити 2 картоплі фрі та 3 гамбургери або 3 порції нагетсів і колу, якщо щось з цього буде в наявності, то я їх куплю і буду ситий. 

let hamburge = 10;
let fries = 300;
let nuggets = 10;
let cola = 200;

if (fries >= 2 && hamburge >= 3 || nuggets >= 3 && cola){
    console.log('Я ситий')
} else {
    console.log('Я голодний')
};