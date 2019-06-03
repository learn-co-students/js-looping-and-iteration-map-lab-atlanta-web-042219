// Code your solution in this file.
function lowerCaseDrivers(array){
  const newArray = []
  array.map(function(element){
    return newArray.push(element.toLowerCase());
  });
  return newArray
}

function nameToAttributes(array){
  return array.map(function(element){
  const element1 = element.split(' ')[0];
  const element2 = element.split(' ')[1];
  return {firstName: element1, lastName: element2};
  });
}


function attributesToPhrase(array){
 return array.map(function(element){
return `${element.name} is from ${element.hometown}`;
 });
}
