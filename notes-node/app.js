console.log('starting app');

const fs = require('fs');
const os =require('os');
const _ = require('lodash');
const notes = require('./notes.js')

let res = notes.add(5, 10);
console.log(res);
let user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
  if (err) throw err;
});
