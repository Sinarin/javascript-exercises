const reverseString = function(word) {
  let reverse = "";
  for(let i = 0; i < word.length; i++){
    reverse += word.slice(word.length - 1 - i, word.length - i);
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
