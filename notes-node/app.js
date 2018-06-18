const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
	describe: "title of note",
	demand: true,
	alias: 't'
}
const bodyOptions = {
	describe: "body of note",
	demand: true,
	alias: 'b'
}
const argv = yargs
	.command('add', 'Add a new note', {
		title: titleOptions,
		body: bodyOptions,
	})
	.command('list', "List all notes")
	.command('read', "Read a single note", {
		title: titleOptions,
	})
	.command('remove', 'Remove a note', {
		title: titleOptions
	})
	.help()
	.argv;
let command = argv._[0];

if (command === 'add') {
	let note = notes.addNote(argv.title, argv.body)
	if (note) {
		console.log("Note was created:")
			notes.logNote(note)
		}
		else {
			console.log("Note title taken")
		}
	} else if (command === "list") {
		const allNotes = notes.getAll();
		console.log(`Printing ${allNotes.length} note(s)`)
		allNotes.forEach((note) => notes.logNote(note))
	} else if (command === 'remove') {
		let noteRemoved = notes.removeNote(argv.title);
		let message = noteRemoved ? "Note was removed" : "There was an error removing the selected note"
		console.log(message)
	} else if (command === "read") {
		const note = notes.readNote(argv.title);
		if (note) {
			console.log("Reading Note:")
			notes.logNote(note)
		} else {
			console.log("Note not found")
		}
	} else {
		console.log('command not recognized')
	}
