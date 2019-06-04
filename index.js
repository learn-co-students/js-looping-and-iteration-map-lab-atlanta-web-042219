function lowerCaseDrivers(drivers){
  return drivers.map(function (driver){
   return driver.toLowerCase();
  });
}

function nameToAttributes(drivers){
  const objList = [];
  drivers.map(function (driver){
   objList.push({ firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]});
  });
  return objList;
}

function attributesToPhrase(drivers){
  const introList = [];
  drivers.map(function (driver){
    introList.push(`${driver.name} is from ${driver.hometown}`);
  });
  return introList;
}