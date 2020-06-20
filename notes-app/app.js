const fs = require('fs')
const { deepStrictEqual } = require('assert')
//fs.writeFileSync('notes.txt', 'My name is Gautam.')

fs.appendFileSync('notes.txt', 'I live in Palakkad, Kerala. I am 23 years old.')