let aPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success!');
    }, 1000);
});

aPromise.then((result) => {
    console.log('result: ', result);
});