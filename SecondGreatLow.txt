function SecondGreatLow(arr) {
arr.sort(function(a, b){return a-b})
    for(i = 0; i < arr.length; i++){
    if(arr[i] < arr[i+1]) {var secGr = arr[i]}
  }
arr.sort(function(b, a){return a-b})
  for(i = 0; i < arr.length; i++){
    if(arr[i+1] < arr[i]) {var secLo = arr[i]}
  }
var list = secLo + " " + secGr;
  return list
}
  