const fs = require('fs')

const originalNote = {
    title: "Some title",
    body: "Some body once told me"
};
const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json", originalNoteString);
const noteString = fs.readFileSync('notes.json')
const note = JSON.parse(noteString)
console.log(typeof note, note.body)