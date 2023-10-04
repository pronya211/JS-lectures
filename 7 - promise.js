console.log('запит даних від серверу...');

setTimeout(() => {
    console.log('підготовка відповіді від сервера...');

    const item = {
        name: 'laptop',
        priice: 10000
    }

    setTimeout(() => {
        item.status = 'sold';
        console.log(item);
    }, 2000)

}, 2000);



let someRequest = new Promise((resolve, reject)=> {}) // проміс

const req = new Promise ((resolve, reject) => {
 setTimeout(() => {
    console.log('запит даних від серверу...');

    setTimeout(() => {
    console.log('підготовка відповіді від сервера...');

    const item = {
    name: 'laptop',
    priice: 10000
    }

    setTimeout(() => {
    item.status = 'sold';
    console.log(item);
    }, 2000)

    }, 2000);

 }, 10000)

});


console.log('запит даних від серверу...');

const req4 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('підготовка відповіді від сервера...');
    
        const item = {
        name: 'laptop',
        priice: 10000
        }
    
       resolve();
       
        }, 2000);
   });

   req4.then(() => {
    console.log('Дані отримані')
   });



   console.log('Запит даних від серверу...');

   const req5 = new Promise ((resolve, reject) => {
       setTimeout(() => {
           console.log('Підготовка відповіді від сервера...');
       
           const item = {
           name: 'laptop',
           priice: 10000
           }
       
          resolve();
          
           }, 2000);
      });
   
      req5.then(() => {
       console.log('Дані отримані')
      });



console.log('Запит даних від серверу...');

const req6 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('Підготовка відповіді від сервера...');
    
        const item = {
        name: 'laptop',
        priice: 10000
        }
    
        resolve(item);
        
        }, 2000);
    });

    req6.then((item) => {
    setTimeout(() => {
        item.status = 'sold';
        console.log(item);
        }, 2000)
    });



console.log('Запит даних від серверу...');

const req7 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('Підготовка відповіді від сервера...');
    
        const item = {
        name: 'laptop',
        priice: 10000
        }
    
        resolve(item);
        
        }, 2000);
    });

    req7.then((item) => {
    const req8 = new Promise ((resolve, reject) => {
        setTimeout(() => {
            item.status = 'sold';

            resolve(item);
            }, 2000);
        });

        req8.then( data => {
            console.log(data)
        });
    });



console.log('Запит даних від серверу...');

const req8 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('Підготовка відповіді від сервера...');
    
        const item = {
        name: 'laptop',
        priice: 10000
        }
    
        resolve(item);
        
        }, 2000);
    });

req8.then((item) => {
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        item.status = 'sold';
        resolve(item);
        }, 2000);
}).then( item => {
        item.size = '13`';
        return item
    })
}).then( item => {
    console.log(item);
});


let errorHappend = false;
console.log('Запит даних від серверу...');

const req9 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('Підготовка відповіді від сервера...');
    
        const item = {
        name: 'laptop',
        priice: 10000
        }

        if(errorHappend){
            reject();
        }
    
        resolve(item);

        }, 2000);
    });

req9.then((item) => {
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        item.status = 'sold';
        resolve(item);
        }, 2000);
}).then( item => {
        item.size = '13`';
        return item
    })
}).then( item => {
    console.log(item);
}).catch(() => {
    console.log('Error')
}). finally(() =>{
    console.log("Цей лог виводиться в будь-якому виавдку")
})

