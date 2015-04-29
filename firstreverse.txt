function FirstReverse(str) { 
var res = str.split("")  
    var seRes =  str.split("")
    var array = []
    for(i = 0; i <= seRes.length; i++){
     array.push(res.pop())
       }
  return array.join(""); 
         
}
   