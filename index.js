function mapToNegativize(arr) {
    return arr.map(int => int * -1)
}

function mapToNoChange(arr) {
    return arr.map(int => int)
}

function mapToDouble(arr) {
    return arr.map(int => int * 2)
}

function mapToSquare(arr) {
    return arr.map(int => int ** 2)
}

function reduceToTotal(arr, startingPoint = 0) {
    let total = startingPoint
    for (const element of arr) {
        total = total + element
    }
    return total;
}

function reduceToAllTrue(arr) {
    for (let element of arr) {
        if (element == false) {
            return false
        } 
    }
    return true
}

function reduceToAnyTrue(arr) {
    for (let element of arr) {
        if (element == true) {
            return true
        } 
    }
    return false
}

