// Your code here

function mapToNegativize(array) {
    return array.map(value => value * -1)
}

function mapToNoChange(array) {
    return array.map(value => value)
}

function mapToDouble(array) {
    return array.map(value => value * 2)
}

function mapToSquare(array) {
    return array.map(value => value ** 2)
}

function reduceToTotal(array, start=0) {
    let total = start
    for (let i = 0; i < array.length; i++) {
        total = total + array[i]
    }
    return total 
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false
    }
    return true;
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) return true
    }
    return false;
}