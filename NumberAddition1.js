function NumberAddition(str) { 
return str.split(/[^0-9]/gi).reduce(function(a,b){return Number(a) + Number(b)})

}
