console.log('Starting')

const greetings = ['Hi!', 'Hello!', 'Holla!','Namaste!']

greetings.filter((greeting) => {
    return greeting.length < 4
}).forEach((greeting) => {
    console.log(greeting)
})

console.log('----------------')


setTimeout(() => {
    console.log('inside 7 seconds timeout')
    setTimeout(() => {
        console.log('inside 5 seconds timeout')
    }, 5000);
}, 7000);

setTimeout(() => {
    console.log('inside 9 seconds timeout')
}, 9000);


greetings.filter((greeting) => {
    return greeting.length >= 4
}).forEach((greeting) => {
    console.log(greeting)
})


console.log('Finishing')