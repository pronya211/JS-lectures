async function someFn(){

};

const asyncFn = async () => {};

const asyncFunc = async () => {
    return "text from async function"
};

console.log(asyncFunc());

asyncFunc().then( text => {
    console.log(text)
});


const timerPromise = () => {
    return new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("some text");
        resolve()
    }, 5000)

    })
}

const asyncFn1 = async () => {
    console.log('1');

    await timerPromise();

    console.log('2')
}

asyncFn1();

