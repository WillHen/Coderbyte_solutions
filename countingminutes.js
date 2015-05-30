function CountingMinutes(str) { 
    var time1 = str.split("-")[0]
    var time2 = str.split("-")[1]

    var time1hours = time1.split(":")[0]
    var time2hours = time2.split(":")[0]
    var time1mins = time1.split(":")[1]
    var time2mins = time2.split(":")[1]
        if(time1.indexOf("p") !== -1){
            time1hours = Number(time1hours)
            time1hours+=12
            }
        if(time2.indexOf("p") !== -1){
            time2hours = Number(time2hours)
            time2hours+=12
            }
    var time1totalmins = (Number(time1hours)* 60) +  Number(time1mins.slice(0,2))
    var time2totalmins = (Number(time2hours)* 60) +  Number(time2mins.slice(0,2))

if( time2totalmins > time1totalmins) 
        {return time2totalmins- time1totalmins }
  else{  
      return 1440 - (time1totalmins - time2totalmins)}       
}