const fs = require('fs')
const getNotes = function (){
    return 'Your Notes'
}

const addNotes = function(title, body){
    const notes = loadNotes();
    notes.push({
        title : title,
        body : body
    })
    saveNotes(notes)
}

function saveNotes(notes){
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesJSON)
}

function loadNotes(){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return data
    }catch(e){
        return []
    }
}

module.exports = {
    getNotes,
    addNotes
}