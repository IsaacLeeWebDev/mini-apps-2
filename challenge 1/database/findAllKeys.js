const database = require('./db.json');
const fs = require('fs');
const path = require('path');

const findAllUniqueKeys = (data) => {
  let uniqueKeys = [];
  for (let i = 0; i < data.length; i++) {
    for (key in data[i]) {
      // console.log(data.key);
      if (!uniqueKeys.includes(key)) {
        uniqueKeys.push(key);
        if (typeof data.key === 'object') {
          uniqueKeys = uniqueKeys.concat(findAllUniqueKeys(data.key))
        }
      }
    }
  }
  console.log('uniqueKeys:', uniqueKeys);
  return uniqueKeys;
}

const categoricalColumns = [
  'lang',
  'category1',
  'category2',
  'granularity',
];

const findAllCategories = (data) => {
  let uniqueCategoricalValues = {
    lang: [],
    category1: [],
    category2: [],
    granularity: [],
  };

   for (let i = 0; i < data.length; i++) {
    for (key in data[i]) {
      // console.log(data.key);
      if (categoricalColumns.includes(key)) {
        if (!uniqueCategoricalValues[key].includes(data[i][key])) {
          uniqueCategoricalValues[key].push(data[i][key]);
          if (typeof data.key === 'object') {
            uniqueCategoricalValues = uniqueCategoricalValues.concat(findAllUniqueKeys(data[i].key))
          }
        }
      }
    }
  }
  console.log('uniqueCategoricalValues: ', uniqueCategoricalValues);
  return uniqueCategoricalValues;
}

findAllUniqueKeys(database.events);
console.log('\nDone!\n');
fs.writeFile(path.resolve(__dirname, './uniqueCatVals.json'), JSON.stringify(findAllCategories(database.events)), () => console.log('Finished!'));