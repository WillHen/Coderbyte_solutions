function DivisionStringified(num1,num2) { 
var answer = num1 / num2;
  var answer = Math.round(answer)
  var count = 1
  var answer = answer.toString();
  for(i = answer.length; i >= 0; i --){
    count++
    if(count % 3 == 0) { var answer = answer.substring(0,i+1) + "," + answer.substring(i+1);
                       }
  }
 return answer.substring(0, answer.length - 1)  
}
   