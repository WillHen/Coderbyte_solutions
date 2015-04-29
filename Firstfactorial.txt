function FirstFactorial(num) { 
  var nList = []
      for(var i = 1; i <= num; i++){
        nList.push(i) }
  var sum = 1
 for (var j = 0; j < nList.length; sum *= nList[j++]);
  return sum; 
        
}