const chalk = require('chalk')
const yargs = require('yargs')
const notes  = require('./notes.js')

// console.log(chalk.green.bold.inverse('Hello World!'))

// yargs.version('1.1.0')

yargs.command({
    command : 'add',
    describe : 'Add a note!',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note Description',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        console.log('Title : ', argv.title)
        console.log('Description : ', argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command : 'list',
    describe : 'List all the notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command : 'read',
    describe : 'Read a note',
    handler() {
        console.log('Reading a note!')
    }
})
yargs.parse()