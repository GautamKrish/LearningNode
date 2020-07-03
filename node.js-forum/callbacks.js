console.log('Starting!')

const geocode = (address, callback) => {
    console.log('before setTimeout')
    setTimeout(() => {
        const data = {
            latitude : 0,
            longitude : 0
        }
        return data
    }, 5000);
    console.log('after setTimeout')
    console.log(address)
}

let data = geocode('philadelphia')
console.log(data)

console.log('Finishing!')