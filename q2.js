// Write a function named eligibleforvote which takes age as a parameter and prints if he/she is
//  eligible to vote or not. ( Consider minimum age of voting to be 18. )

function eligibleforvote(age){
    if(age>=18){
        console.log("eligible for vote");
    }else{
        console.log("not eligible for vote");
    }
}
const userinput=require("readline-sync");
var num=userinput.questionInt("enter the age")
eligibleforvote(num)