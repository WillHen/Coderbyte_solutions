function PowersofTwo(num) { 
 function divide(num) {
   return num/2 }
if(num == 2) { return true}
  else if(( num % 2)) {return false}
  else { return  PowersofTwo(divide(num))}     
}
   