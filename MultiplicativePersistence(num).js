function MultiplicativePersistence(num) { 
var count = 0
function multi(num){
  count++
    num = num.toString().split("").reduce(function(a,b){return Number(a) * Number(b)})
    if(num.toString().length !== 1){return multi(num)}
  else{return count}
    }
if(num.toString().length=== 1) {
return 0
}
else { return multi(num)
}
}
