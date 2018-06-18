const fs = require('fs');

const fetchNotes = () => {
	try {
		const notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString)
	} catch (e) {
		return [];
	}
};
const saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const logNote = (note) => {
	debugger;
	console.log("--")
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}

const addNote = (title, body) => {
	let notes = fetchNotes();
	const note = {
		title,
		body,
	};

	const duplicateNote = notes.filter((note) => note.title === title);
	if (duplicateNote.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
}
const getAll = () => {
	return fetchNotes();
}
const removeNote = (title) => {
	let notes = fetchNotes();
	const updatedNotes = notes.filter((note) => note.title !== title);
	saveNotes(updatedNotes)

	return notes.length !== updatedNotes.length;
}

const readNote = (title) => {
	let notes = fetchNotes();
	const selectedNote = notes.filter((n) => n.title === title);
	return selectedNote[0];
}
module.exports = {
	addNote,
	getAll,
	removeNote,
	readNote,
	logNote,
}
