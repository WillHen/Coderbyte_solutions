function LookSaySequence(num) { 
    var count = 1;
    var resultNum = ""
    num = num.toString()
        for(var i = 0; i < num.length; i++){
            if(num[i] === num[i+1]) 
                {count++}
            else if(num[i] !== num[i+1] ) {
                resultNum += count + num[i];
                count = 1}
                                        }
  return resultNum;        
}