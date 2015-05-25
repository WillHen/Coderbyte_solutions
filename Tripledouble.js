function TripleDouble(num1,num2) { 
num1 = num1.toString().split("");
num2 = num2.toString().split("");
var obj1 = {}, obj2 = {};
	for(var i = 0; i < num1.length; i++)
{
		if(obj1[num1[i]] ) { obj1[num1[i]]+= 1 }
		else{ obj1[num1[i]] = 1 }
		if(obj2[num2[i]] ) { obj2[num2[i]]+= 1 }
		else{ obj2[num2[i]] = 1 }
}

for(var prop in obj1){
	if(obj1[prop] > 1 && obj2[prop] > 1){
		return 1 } 
		}
	return 0      
}
   