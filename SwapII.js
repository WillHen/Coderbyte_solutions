function SwapII(str) { 
  var newStr = "";
	for(var i = 0; i < str.length; i++){
		if(str[i] === str[i].toUpperCase()){newStr += str[i].toLowerCase()}
		else if(str[i] === str[i].toLowerCase()) {newStr += str[i].toUpperCase()}
		else {newStr += str[i]}
}
	if(newStr.search(/\d\w+\d/g) !== -1){
		var newVal = newStr.match(/\d\w+\d/g).toString();
		var temp = newVal[0];
		var temp2 = newVal[newVal.length-1];
		newVal = temp2 + newVal.slice(1);
		newVal = newVal.slice(0, newVal.length-1) + temp;
  		return newStr.replace(/\d\w+\d/g,newVal); 
}
	else {return newStr}      
}