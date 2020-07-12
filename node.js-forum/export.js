console.log(module.exports)
console.log(exports)

const sum = () =>{
    console.log(10)
}

const name = 'Gautam Krishnan'

exports.name = name
module.exports = exports = sum

