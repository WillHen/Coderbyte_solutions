function SwapCase(str) {
function help(str) {
for(i = 0; i < str.length; i++) {
if(str[i] == str[i].toUpperCase()) { return str.toLowerCase() }
else if (str[i] == str[i].toLowerCase()){return str.toUpperCase() }
}
}
var newstr = str.replace(/[a-z]/gi, help);
return newstr;
}