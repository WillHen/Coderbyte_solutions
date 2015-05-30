function FormattedDivision(num1,num2) { 
     var ans = num1/num2
    ans = ans.toFixed(4)
    ans = ans.toString()
        if(ans.slice(ans.indexOf(".")).length <= 3){
                return ans}
        else{
                var count = 0
                var whole = ans.split(".")[0]
                var dec = ans.split(".")[1]
                  for(i = whole .length; i > 0; i--){
                count++
                if(count === 4){whole  = whole.slice(0, i) + "," + whole.slice(i)   }
                                                    }
  return whole +"."+ dec; 
}   
}