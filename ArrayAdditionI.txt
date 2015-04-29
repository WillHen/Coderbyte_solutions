function ArrayAdditionI(arr) { 
var max = arr.sort(function(a, b){return a-b}).pop([arr.length-1])
var sum = arr.reduce(function(x,y){return x +y;})
for(i = 0; i < arr.length; i++){
  if(sum - arr[i] == max){ return true}
}
  return false
}
   