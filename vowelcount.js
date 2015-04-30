function VowelCount(str) { 

var res = str.split(""); 
  var count = 0
  for(i = 0; i <= res.length; i ++){
    if(res[i] == "e") { count++}
    else if(res[i] == "E") {count++}
    else if(res[i] == "u") {count++}
    else if(res[i] == "U") {count++}
    else if(res[i] == "a") {count++}
    else if(res[i] == "A") {count++}
    else if(res[i] == "o") {count++}
    else if(res[i] == "O") {count++}
    else if(res[i] == "i") {count++}
    else if(res[i] == "I") {count++}
  }
  return count; 
         
}