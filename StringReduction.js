function StringReduction(str) { 
  var chars = {
	"ab": "c",
    "bc": "a",
    "ac": "b",
    "ca": "b",
    "ba": "c",
    "cb": "a"
}
for(var prop in chars){
  str = str.replace(prop, chars[prop])
}
return str.length
}
