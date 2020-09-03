function mapToNegativize(source){
    let negativeArray = []
    for (let i=0; i<source.length; i++){
        negativeArray.push(source[i] * -1)
    }
    return negativeArray
};

function mapToNoChange(source){
    return source
};

function mapToDouble(source){
    let doubledArray = []
    for (let i=0; i<source.length; i++){
        doubledArray.push(source[i] * 2)
    }
    return doubledArray
};

function mapToSquare(source){
    let squaredArray = []
    for (let i=0; i<source.length; i++){
        squaredArray.push(source[i] ** 2)
    }
    return squaredArray
};

function reduceToTotal(source, start=0){
    let total = start
    for (let i=0; i<source.length; i++){
        total += source[i]
    }
    return total
};

function reduceToAllTrue(source){
    for (let i=0; i<source.length; i++){
        if(!source[i]) return false
    }
    return true
};

function reduceToAnyTrue(source){
    for (let i=0;i<source.length; i++){
        if(source[i]) return true
    }
    return false
}