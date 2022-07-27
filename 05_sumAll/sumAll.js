const sumAll = function(n1, n2) {
if(typeof n1 !== "number" || typeof n2 !== "number" ||
n1 < 0 || n2 < 0) return "ERROR";
let sum = n2;
if(n1 > n2){
  for(; n1 > n2; n1--){
    sum += n1;
  }
}
else {
  while(n1 < n2){
    sum += n1;
    n1++;
  }
}
return sum;
};


// Do not edit below this line
module.exports = sumAll;
