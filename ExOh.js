function ExOh(str) { 
 var arr = str.split(""), countX = 0, countO = 0;
  arr.forEach(function(ele){
  ele === "o" ? countO++ : countX++;
 })
return countX === countO;         
}