function NumberAddition(str) { 
  var count = 0;
var arr = str.replace(/[^0-9]/gi, " ");
arr = arr.split(/[^0-9]/g);
  for(i = 0; i < arr.length; i ++){
    if(!arr[i] == " ") { count += Number(arr[i])}
  }
return count         
}