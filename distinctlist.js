function DistinctList(arr) {

    var obj = {}

    for(var i = 0; i < arr.length; i++){
        if(!obj[arr[i]]){obj[arr[i]] = 1}
        else{ obj[arr[i]] ++}
                            }
var count = 0
    for(var prop in obj){
    if(obj[prop] > 1) {count+= obj[prop]-1}
    }
 return count
}