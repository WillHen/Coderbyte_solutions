function NumberEncoding(str) {
str = str.toLowerCase()
var char ='abcdefghijklmnopqrstuvwxyz'
 var ans = "";
for(var i = 0; i < str.length; i++){
if(char.indexOf(str[i]) !== -1){ans+= char.indexOf(str[i])+1}
else{ans+= str[i]}
}
  return ans;

}