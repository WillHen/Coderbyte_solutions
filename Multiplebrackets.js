function MultipleBrackets(str) { 
    var braces = "", counter = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] === "(" || str[i] === "[")
            {braces += str[i]}
        else if(str[i] === ")" || str[i] === "]"){
            if(str[i] === ")" && braces[braces.length-1] === "("){
                counter++
                braces = braces.slice(0, braces.length-1) }
            else if(str[i] === "]" && braces[braces.length-1] === "["){
                counter++
                braces = braces.slice(0, braces.length-1)
            }
        else{return braces}
                                                }
                                        }
return braces.length === 0 ? "1 " + counter : braces
}
   