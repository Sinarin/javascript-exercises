const removeFromArray = function(array, ...filter) {
  let filteredArray = [];
  newArray:
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < filter.length; j++){
      if (array[i] === filter[j]) continue newArray;
    }
  filteredArray.push(array[i]);
  }
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;