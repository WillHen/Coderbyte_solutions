function LetterChanges(str) { 
  var news = ""
var alph = "abcdefghijklmnopqrstuvwxyz"
var alphC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
for(i = 0; i < str.length;i ++){
  if(str[i].match(/[a-z]/g)){
  news += alph.charAt(alph.indexOf(str[i])+1)
  }
  else if(str[i].match(/[A-Z]/g)){news += alphC.charAt(alphC.indexOf(str[i])+1)
  }
  else {news+= str[i]}
}  
  news = news.replace(/a/g, 'A');
news = news.replace(/e/g, 'E');
news = news.replace(/i/g, 'I');
news = news.replace(/o/g, 'O');
news = news.replace(/u/g, 'U');
  
  return news; 
         
           
}