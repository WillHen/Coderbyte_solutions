function DashInsert(str) { 
var current = '';
var prev='';
var newstring='';
  str = str.toString()
  for (i = 0; i < str.length; i++){
  str.charAt(i)%2 == 0 ? current = 'even' : current='odd';
    if(current == 'odd' && prev == 'odd'){
      newstring = newstring + '-' + str[i];
			prev='odd';}
    else { prev = current; 
          newstring = newstring + str[i];}
  }
    return newstring
}
