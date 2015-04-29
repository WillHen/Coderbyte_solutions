function OffLineMinimum(strArr) { 
function getMin(arr){return arr.sort()[0]}
var ind = 0, subset = [], length = strArr.length
  for(i = 0; i < strArr.length; i++){
  if(strArr[i] === "E"){ var min = getMin(strArr.slice(0,i))
 ind = strArr.indexOf(min);
                    subset.push(min)
                    strArr.splice(ind, 1)
                    i--
  }
  }
  return subset.join(","); 
         
}