function factorial(n) {
    return(n!=1)?n*factorial(n-1):1
 }
 var number = process.argv.slice(2)
 console.log(factorial(number))