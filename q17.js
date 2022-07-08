// Q26. Write a function called fizz_buzz that takes a number.
// If the number is divisible by 3, it should return “Fizz”.
// If it is divisible by 5, it should return “Buzz”.
// If it is divisible by both 3 and 5, it should return “FizzBuzz”.
// Otherwise, it should return the same number.


function fizz_buzz(number){
    if (number%3==0 && number%5==0){
        console.log("FizzBuzz")
    }
    else if(number%3){
        console.log("Fizz")
    }
    else if(number%5){
        console.log("Buzz")
    }
}
fizz_buzz(20)