function mapToNegativize(arr) {
  const newArr = []
  arr.forEach(num => {
    newArr.push(num * -1)
  })

  return newArr
}

function mapToNoChange(arr) {
  return Object.assign([], arr)
}

function mapToDouble(arr) {
  const newArr = []
  arr.forEach(num => {
    newArr.push(num * 2)
  })

  return newArr
}

function mapToSquare(arr) {
  const newArr = []
  arr.forEach(num => {
    newArr.push(num ** 2)
  })

  return newArr
}

function reduceToTotal(arr, start=0) {
  let total = start
  arr.forEach(num => {
    total += num
  })

  return total
}

function reduceToAllTrue(arr) {
  for (const num of arr) {
    if (!num) {
      return false
    }
  }

  return true
}

function reduceToAnyTrue(arr) {
  for (const num of arr) {
    if (!!num) {
      return true
    }
  }

  return false
}