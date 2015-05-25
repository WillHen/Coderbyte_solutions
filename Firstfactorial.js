function FirstFactorial(num) { 
var arr = []
for(i = num; i >= 1; i--){
arr.push(i)
}
  return arr.reduce(function(a,b){return a * b}); 
}
