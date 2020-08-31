function mapToNegativize(array) {
    return array.map(e => {
        return e * -1;
    })
}

function mapToNoChange(array) {
    return array.map(e => {
        return e;
    })
}

function mapToDouble(array) {
    return array.map(e => {
       return e * 2;
    })
}

function mapToSquare(array) {
    return array.map(e => {
        return e * e;
    })
}

function reduceToTotal(array, integer = 0) {
    return array.reduce((newArray, e) => {
        return newArray + e;
    }, integer)
}

function reduceToAllTrue(array) {
    return array.reduce((acc,e) => {
        if (e) {
            return acc = true;
        }
        else {
            return acc = false;
        }
    })
}

function reduceToAnyTrue(array) {
    return array.reduce((acc, e) => {
        if (e) {
            return acc = true;
        }
        if (!e) {
            return acc = false;
        }
    })
}