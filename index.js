// Your code here
function mapToNegativize(source) {
    let result = []
    for (let i = 0; i < source.length; i++) {
        result.push(source[i] * -1);
    }
    return result;
}

function mapToNoChange(src) {
    let result = []
    for (let i = 0; i < src.length; i++) {
        result.push(src[i]);
    }
    return result;
}

function mapToDouble(src) {
    let result = []
    for (let i = 0; i < src.length; i++) {
        result.push(src[i] * 2);
    }
    return result;
}

function mapToSquare(src) {
    let result = []
    for (let i = 0; i < src.length; i++) {
        result.push(src[i] * src[i]);
    }
    return result;
}
// Reduce like methods
function reduceToTotal(src, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++) {
        total = total + src[i];
    }
    return total;
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++) {
        if (!src[i]) return false;
    }
    return true;
}

function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++) {
        if (src[i]) return true;
    }
    return false;
}