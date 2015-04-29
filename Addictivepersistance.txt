  var timesCount = 0
function AdditivePersistence(num) { 
  if(num.toString().length == 1){ return 0} else {
var count = 0;
 function add(num){
      timesCount++
  var str = num.toString()
      for(i = 0; i < str.length; i++){
    count += Number(str.charAt(i)); }
return count}
  var result = add(num)
if (result.toString().length == 1){ return timesCount}
  else {return AdditivePersistence(result)}
  }
}