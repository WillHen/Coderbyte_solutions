function BracketMatcher(str) { 
var count = 0
str.split("").forEach(function(cell){if(cell === "(") {count++}
else if(cell === ")"){count--}
}) 
  if(count !== 0){return 0}
else if(count=== 0){return 1}
         
}