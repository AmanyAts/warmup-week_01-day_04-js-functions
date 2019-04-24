const isLeapYear = function(year){
    if(typeof year === 'number'){
    if(year>0){
    if(year%4==0 && year%100==0 && year%400==0 || year%4==0 && year%100 !=0){
        return true;
    }else {
        return false;
    }
    }else{
    return "is not a year "
    }
    }else{
    return "is not number"
    }
    }//close

isLeapYear(1997) // false
isLeapYear(1996) // true
isLeapYear(1900) // false
isLeapYear(2000) // true