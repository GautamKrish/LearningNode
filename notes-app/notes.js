const fs = require('fs');
const chalk = require('chalk');
const { clear } = require('console');
const getNotes = function (){
    return 'Your Notes'
}

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title)
    if(duplicateNotes.length == 0){
        notes.push({
            title : title,
            body : body
        })
        console.log(chalk.bgGreen('Note added!'))
    } else{
        console.log(chalk.bgRed('Note title already taken!'))
    }
    saveNotes(notes)
}


const removeNote = function(title){
    const notes = loadNotes()
    var flag = 0
    let notesToKeep = notes.filter(note => note.title != title)
    if(notes.length > notesToKeep.length){
        console.log(chalk.bgGreen('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.bgRed('No note found!'))
    }
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
    addNote,
    removeNote
}