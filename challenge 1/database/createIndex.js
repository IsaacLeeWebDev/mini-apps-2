let database = require('../db.json');
const fs = require('fs');
const path = require('path');

const createIndex = (db) => {
  let myDb = {};
  myDb.events = [];
  for (let i = 0; i < db.events.length; i++) {
    db.events[i].id = i
    myDb.events.push(db.events[i]);
    // myDb = db.events[i];
    // myDb.events[i].id = i;
    // console.log(JSON.stringify(database.events[i]));
  }
  return myDb;
  // fs.writeFile(path.resolve(__dirname, './db.json'), JSON.stringify(data), () => console.log('Finished!'));
}
fs.writeFile(path.resolve(__dirname, './db.json'), JSON.stringify(createIndex(database)), (err) => console.log(err ? err : 'Finished!'));
// fs.writeFile(path.resolve(__dirname, './db.json'), JSON.stringify({"hi world":"hello world"}), (err) => console.log(err ? err : 'Finished!'));
