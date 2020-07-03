//Object property shorthand
const name = 'Gautam'
const age = 23

const user = {
    name,
    age,
    location : 'Palakkad'
}

console.log(user)

//Object destructuring
const product = {
    name : 'Red notebook',
    label : 'stationery',
    price : 10,
    stock : 200,
    rating : 4.8
}

const {label : productLabel, price, stock, rating} = product
console.log(productLabel)
console.log(price)
console.log(stock)
console.log(rating)

const productInformation = (type, {label : productLabel, price, rating}) => {
    console.log(productLabel)
    console.log(price)
    console.log(rating)
}

productInformation('random', product)