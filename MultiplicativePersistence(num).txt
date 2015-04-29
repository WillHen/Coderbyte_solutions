function MultiplicativePersistence(num) { 
  var count = 0
if(num.toString().length <= 1){ return 0}
else {
function addictive(num) {
  count++
    var arr = []
      var ans = 0
    var sNum = num.toString()
      for(i = 0; i < sNum.length; i++) {
      arr.push(sNum.charAt(i))
}
        ans = Number(arr.pop())
  for(j = 0; j < arr.length; j++){
    ans*=Number(arr[j]) }
  if(ans.toString().length >1) {
    return addictive(ans)}
  else {return count}
}
    }
return addictive(num)
}
   