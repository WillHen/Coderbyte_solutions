function ArithGeo(arr) { 
var isArth = function(array){
		var testNum = array[1] - array[0];
		for(var i = 0; i < array.length; i++){
			if(array[i+1] !== undefined){
				if(arr[i] + testNum !== arr[i+1]) {return false;}
			}
		}
		return true;
		}  

		var isGeo = function(array){
			var testNum = array[1]/array[0];
			for(var i = 0; i < array.length; i++){
				if(array[i+1] !== undefined){
					if(array[i] * testNum !== array[i+1]){
						return false;
					}
				}
			}
			return true
		}
        if(isArth(arr)){return "Arithmetic"}
		else if(isGeo(arr)){return "Geometric"}
  		return -1
        }