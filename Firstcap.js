function LetterCapitalize(str) { 
 var list = str.split("");
     var list2 = "";
  for(i = 0; i < list.length; i++){
    if(i == 0) { list[i] = list[i].toUpperCase(); }
    else if( list[i] == " ") { list[i + 1] = list[i + 1].toUpperCase()}
}
  return list.join("");
    }