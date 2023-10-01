if (4 ==5){
console.log('Expression is true')
} else {
    console.log('Expression is false')
};

if (true)
console.log('Expression is true');

let num = 50;

if (num<49){
    console.log('Expression is true')
} else if (num > 1000) {
    console.log('> 1000')
} else {
    console.log('ok')
};

let num2 = 100;
(num2 === 100) ? console.log('ok') : console.log('not ok');


let number =149;
switch(number){
    case 49:
        console.log('number = 49');
        break;
    case 50:
        console.log('number = 50');
        break;
    case 500:
        console.log('number = 500');
        break;
    default:
        console.log('Default output');
        break;        
}