function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

var array = process.argv.slice(2)
console.log(daysInMonth(array[0], array[1]));
//console.log(daysInMonth(-10, 2021));


 
 