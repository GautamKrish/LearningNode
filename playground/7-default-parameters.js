const greetings = ({name = 'Gautam', age = 23, purpose = 'will soon find out'} = {}) => {
    console.log(`${name} ${age} ${purpose}`)
}


const user = {
    name : 'Gautam',
    age : 23,
    purpose : 'trying to find balance between programming and spirituality'
}

greetings()

const name = ''
const falsy = 0

const result = name || falsy
console.log(result)



