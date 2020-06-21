const chalk = require('chalk')
const getNotes  = require('./notes.js')
console.log(getNotes())
console.log(chalk.green.bold.inverse('Hello World!'))
const command = process.argv[2]

if(command === 'add'){
    console.log('Adding a note!')
} else if (command === 'remove'){
    console.log('Removing a note!')
}