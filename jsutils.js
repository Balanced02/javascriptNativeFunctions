// create an array of object keys
function arrayOfObjectLeys(obj){
    return Object.keys(obj);
}

// create an array of object values
function arrayOfObjectValues(obj){
    return Object.values(obj);
}

// create a new array from an array
function arrayCopy(arr){
    return arr.slice();
}

// Loop through values in an array
function LoopArray(arr){
    arr.forEach(function(val) {
        // do whatever here
    })
}

// add a value to an array index
function addToArray(arr, val, index) {
    // arr.splice(index, 0, val);
    // return arr;
    return arr.slice(0, index).concat(value, arr.slice(index)) // to avoid mutating
}

// Remove value from array
