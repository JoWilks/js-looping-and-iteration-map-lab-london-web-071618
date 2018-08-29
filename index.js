// Code your solution in this file.

function lowerCaseDrivers(collection) {
  return collection.map( driver => driver.toLowerCase() )
}

function nameToAttributes(collection) {
  let obj = []
  collection.map( driver => {
    let tempObj = {}
    let split = driver.split(" ");
    tempObj["firstName"] = split[0];
    tempObj["lastName"] = split[1];
    obj.push(tempObj);
  })
  return obj
}

function attributesToPhrase(collection) {
  let obj = []
  collection.map( driver => {
    let string = `${driver.name} is from ${driver.hometown}`;
    obj.push(string);
  })
  return obj
}
