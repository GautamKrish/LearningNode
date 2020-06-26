const fs = require('fs');
const chalk = require('chalk');
const { clear } = require('console');
const getNotes = () => {
    return 'Your Notes'
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title)
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


const removeNote = (title) => {
    const notes = loadNotes()
    let notesToKeep = notes.filter((note) => note.title != title)
    if(notes.length > notesToKeep.length){
        console.log(chalk.bgGreen('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.bgRed('No note found!'))
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesJSON)
}

const loadNotes = () => {
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
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote
}