function SimpleSymbols(str) { 
  for(var i = 0; i < str.length; i++){
      if(i == 0 && str[i].search(/[a-z]/gi) !== -1){return false}
        else if(i == str.length-1 && str[i].search(/[a-z]/gi) !== -1){return false}
        else if(str[i].search(/[a-z]/gi) !== -1 && str[i-1] !== "+" && str[i+1] !== "+")
        {return false }
        }
return true        
}