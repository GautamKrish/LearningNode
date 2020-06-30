const fs = require('fs');
const chalk = require('chalk');
const { clear } = require('console');


const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(!note){
        console.log(chalk.red.inverse.bold('No such note found!'))
    } else{
        console.log(chalk.green.inverse.bold('Note Found!'))
        console.log('Title : ' + note.title)
        console.log('Body : ' + note.body)
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.cyanBright.inverse.bold('Your Notes!'))
    notes.forEach((note) => console.log(note.title));
}


const addNote = (title, body) => {
    const notes = loadNotes();
    debugger
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
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
    readNote : readNote,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes
}