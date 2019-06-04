function lowerCaseDrivers(arr) {
    return arr.map(function(driver) {
        return driver.toLowerCase()
    })
}

function nameToAttributes(arr) {
    return arr.map(function(driver) {
        const firstName = driver.split(" ")[0]
        const lastName = driver.split(" ")[1]
        return { firstName: firstName, lastName: lastName }
    })
}

function attributesToPhrase(arr) {
    return arr.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
}