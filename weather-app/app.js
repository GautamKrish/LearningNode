console.log('Starting')

//setTimeout is an asynchronous function
setTimeout(() => {
    console.log('2 second timer')
}, 2000);

setTimeout(() => {
    console.log('0 second timer')
}, 0);
console.log('Stopping')