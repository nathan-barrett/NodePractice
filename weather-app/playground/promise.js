const asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        	if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject ('Arguments must be numbers');
            }
        }, 2500);
    })
};

asyncAdd(5, 7).then((res) => {
    console.log(`Result: ${res}`);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log(`Should be 45: ${res}`)
}).catch((err) => {
    console.log(err)
})

// const somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('hey it worked');
//         reject('error occured');
//     }, 2500)
// });

// somePromise.then((message) => {
//     console.log(`success: ${message}`);
// }, (errorMessage) => {
//     console.log(`error: ${errorMessage}`)
// }