const removeFromArray = function(array, ...filter) {
  for(let j = 0; j < filter.length; j++){
    for(let i = 0; i < array.length; i++){
      if (array[i] === filter[j]) array.splice(i, 1, );
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
