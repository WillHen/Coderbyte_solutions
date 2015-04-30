function TimeConvert(num) { 
    if(num < 60){ return 0 + ":" + num;}
  else {
var hours = Math.floor(num/60)
var minutes = num - (hours * 60)
  return hours + ":" + minutes; 
  }   
}