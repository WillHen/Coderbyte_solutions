function ExOh(str) { 
 var arr = str.split("");
  var countX = 0
      var countO = 0
      
  for(i = 0; i < arr.length; i ++){
    if(arr[i] == "x") {
      countX++}
    else { countO++}
  }
    if(countX == countO) {
      return true}
    else{ return false} ;
         
}