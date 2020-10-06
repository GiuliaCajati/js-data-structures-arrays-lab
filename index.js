// Write your solution here!


const drivers = ["Milo", "Otis", "Garfield"];

//adds name to the end of the drivers array
function destructivelyAppendDriver(name) {
    drivers.push(name);
}

//adds name to the beginning of the drivers array:
function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

//removes the last driver from the drivers array:
function destructivelyRemoveLastDriver(name) {
    drivers.pop();
}

//removes the First driver from the drivers array:
function destructivelyRemoveFirstDriver(name) {
    drivers.shift();
}

//adds name to the end of the drivers array and returns a new array, leaving the drivers array unchanged:
function appendDriver(name) {
    return [...drivers, name]
}

//prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function prependDriver(name) {
    return [name, ...drivers]
}

//removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged
function removeFirstDriver(name) {
    return drivers.slice(1);
}

//removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged
function removeLastDriver() {
    return drivers.slice(0, -1)
}