function NumberSearch(str) { 
  return Math.round(str.match(/[0-9]/g).reduce(function(a,b){return Number(a) + Number(b)})/str.match(/[a-z]/gi).length)    
}