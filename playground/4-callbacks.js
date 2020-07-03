console.log('Start')

// setTimeout(() => {
//     console.log('Inside setTimeout')
// }, 2000);
const dummy = ['A','B','C','D','E']
dummy.forEach((item) =>{
    console.log(item)
})
const geocode = (location, callback) => {
    // setTimeout(() => {
    //     const data = {
    //         latitude : 0,
    //         longitude : 0
    //     }
    //     console.log('data will now be returned')
    //     callback(data)
    // }, 2000);
    const data = {
        latitude : 0,
        longitude : 0
    }
    callback(data)
    console.log('inside the geocode function')
}

geocode('philadelphia', (data) => {
    console.log(data)
})


// const add = (a, b, callback) => {
//     setTimeout(() => {
//         let sum = a + b
//         callback(sum)
//     }, 2000);
// }

// add(1, 4, (sum) => {
//     console.log(sum)
// })

// setTimeout(() => {
//     console.log('1 second timer')
//     setTimeout(() => {
//         console.log('3 second timer')
//     }, 3000);
// }, 1000);

// setTimeout(() => {
//     console.log('2 seconds timer')
// }, 2000);

console.log('Finish')