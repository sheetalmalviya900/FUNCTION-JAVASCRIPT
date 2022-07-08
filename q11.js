// Q9.Write a Python program to generate and print a list of first and last 5 elements where 
//   the values are square of numbers between 1 and 30 (both included).
// Output :-([1, 4, 9, 16, 25], [676, 729, 784, 841, 900]).
function squares_of_list(lengthOfList){
    arr=[]
    for(var i=1;i<=lengthOfList;i++){
        arr.push(i)
    }
    start=[]
    last=[]
    for(var i=0;i<5;i++){
        start.push(arr[i]**2)
    }
    last=[]
    for(var i=lengthOfList-5;i<arr.length;i++){
        last.push(arr[i]**2)
    }
    console.log(start,last)
}
const userinput=require("readline-sync");
lengthOfList=userinput.questionInt("Enter the number ")
squares_of_list(lengthOfList)