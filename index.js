// Code your solution in this file.
function lowerCaseDrivers(list) {
  return list.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(list) {
  return list.map(function (driver) {
    const name = driver.split(' ');
    return Object.assign({firstName: name[0]}, {lastName: name[1]});
  });
}

function attributesToPhrase(list) {
  return list.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
}