function ArrayAddition(arr) { 
var total = 0;
var largest = arr.sort(function(a,b){return a -b }).pop()
  for(var i = 0; i < arr.length; i++){
        total = 0     
        total += arr[i]
        for(var j = 0; j < arr.length; j++){
          if(j !== i){total  += arr[j]}
          if(total  === largest){ return true} }
              for(k = 0; k < arr.length; k++){
              if(k !== i){total  -= arr[k]  }
              if(total  === largest){ return true}
											}
												}
  return false; 
         
}