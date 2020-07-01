console.log('Start')

setTimeout(() => {
    console.log('Inside setTimeout')
}, 2000);


console.log('Finish')


const geocode = (location, callback) => {
    setTimeout(() => {
        const data = {
            latitude : 0,
            longitude : 0
        }
        return(data)
    }, 2000);
}

const data = geocode('philadelphia')
console.log(data)

// const add = (a, b, callback) => {
//     setTimeout(() => {
//         let sum = a + b
//         callback(sum)
//     }, 2000);
// }

// add(1, 4, (sum) => {
//     console.log(sum)
// })


