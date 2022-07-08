// Q10.Create a function that takes 2 positive integers in form of a string as an input,
// and outputs the sum (also as a string):
// "4",  "5" --> "9"
// "34", "5" --> "39"
// Notes:
// If either input is an empty string, consider it as zero.


function square_of_number(num1,num2){
    number=Number(num1)+Number(num2)
    console.log(String(number))
}
square_of_number("4","5")