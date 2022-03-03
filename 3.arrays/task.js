function compareArrays(arr1, arr2) {
  return (arr1.length === arr2.length) && (arr1.every((number, idx) => number === arr2[idx])); // boolean
}

function advancedFilter(arr) {
  return (arr.filter((num) => num > 0).filter((num) => num % 3 === 0).map((num) => num * 10)); // array
}
