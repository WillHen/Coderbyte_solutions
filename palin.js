function Palindrome(str) { 

var res = str.split("").reverse().join("");
  if(res == str) {return true }
  else{ return false} ;
         
}