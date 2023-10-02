let num = 50;

while( num < 60 ){
    console.log(num);
    num++;
};


let num1 = 70;

do {
    console.log(num1);
    num1++;
} while (num1 < 60);




for( let i = 1; i < 8; i++){
    console.log(i);
} 



let num2 = 70;
for( let i = 1; i < 8; i++){
    console.log(num2);
    num2++;
};


let arr = [3, 5, 6, 7, 11];
for( let i = 0; i < arr.length; i++){
    console.log(arr[i]);
};


let arrr = [3, 5, 6, 7, 11];
for (let i = 0; i < arrr.length; i++){
    if(i === 3){
        continue;
    }
    console.log(`i = ${i}`);
    console.log(`arrr element = ${arrr[i]}`);
};


let arrray = [3, 5, 6, 7, 11];
for (let i = 0; i < arrray.length; i++){
    if(i === 3){
        break;
    }
    console.log(`i = ${i}`);
    console.log(`arrr element = ${arrray[i]}`);
};


for(let i = 0; i < 3; i++){
    console.log(`i = ${i}`);

    for(let j = 0; j < 3; j++){
        console.log(`j = ${j}`);
    };
};

