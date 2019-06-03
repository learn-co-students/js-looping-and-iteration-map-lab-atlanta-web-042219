function lowerCaseDrivers(arr) {
	return arr.map(ele => ele.toLowerCase())
}

function nameToAttributes(arr) {
	return arr.map(function(ele) {
		return { firstName: ele.split(' ')[0], lastName: ele.split(' ')[1] }
	})
}

function attributesToPhrase(obj_arr) {
	return obj_arr.map(function(ele) {
		return `${ele.name} is from ${ele.hometown}`
	})
}
