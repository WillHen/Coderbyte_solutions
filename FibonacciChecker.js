function FibonacciChecker(num) { 
    var fibs = [1, 1]

    for(var i = 1; i <= num; i++){
        fibs.push(fibs[i] + fibs[i-1])
                                }
    return fibs.indexOf(num) !== -1 ? "yes" : "no"
}