const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
var dataJSON = dataBuffer.toString()
const object = JSON.parse(dataJSON)
object.name = 'Gautam'
object.age = 23
console.log(object.name, object.age)
dataJSON = JSON.stringify(object)
console.log(dataJSON)
fs.writeFileSync('1-json.json', dataJSON)

//addNote, loadNotes, saveNotes, duplicateNotes, module.exports
