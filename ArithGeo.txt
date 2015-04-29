function ArithGeo(arr) { 

var diff = arr[1] - arr[0]
var gdiff = arr[1] / arr[0]
for(i = arr.length; i > 1; i--) {
  if(arr[i] - diff === arr[i-1]) { return "Arithmetic" }
  else if  (arr[i] / gdiff === arr[i-1]){return "Geometric"}
}
  return -1
}