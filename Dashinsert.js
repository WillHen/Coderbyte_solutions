function DashInsert(str) { 
var current = '',prev='',newstring='';
  str = str.toString()
  for (var i = 0; i < str.length; i++){
  str.charAt(i)%2 == 0 ? current = 'even' : current='odd';
    if(current == 'odd' && prev == 'odd'){
      newstring = newstring + '-' + str[i];
			prev='odd';}
    else { prev = current; 
          newstring = newstring + str[i];}
  }
    return newstring
}
