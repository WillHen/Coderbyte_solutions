function CaesarCipher(str,num) { 
var alph1 = "abcdefghijklmnopqrstuvwxyz"
var alph2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  return str.split("").map(function(ele){
        if(alph1.indexOf(ele) !== -1 && alph1.indexOf(ele) + num < 26){ 
                return alph1.charAt(alph1.indexOf(ele) + num)}
        else if(alph2.indexOf(ele) !== -1 && alph2.indexOf(ele) + num < 26){ 
                return alph2.charAt(alph2.indexOf(ele) + num)}
        else if(alph1.indexOf(ele) !== -1 && alph1.indexOf(ele) + num > 26){
            var temp = num - (26 - alph1.indexOf(ele))
            return alph1.charAt(temp)}
        else if(alph2.indexOf(ele) !== -1 && alph2.indexOf(ele) + num > 26){ 
            var temp = num - (26 - alph2.indexOf(ele))
            return alph2.charAt(temp)}
        else{return ele}
                                    }).join("")        
}
   