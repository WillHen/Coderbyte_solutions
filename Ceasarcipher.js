function CaesarCipher(str,num) { 
var newstr = "", temp
for(var i = 0; i < str.length; i++){
if(!/[a-z]/gi.test(str[i])){newstr+= str[i]}
else{
  temp = str.charCodeAt(i); 
newstr += String.fromCharCode(temp+num) }
}
return newstr
}
   
