// Given a list of numbers, write a Python program to count positive and negative numbers in a List using function.
// Example:
// list1 = [2, -7, 5, -64, -14]
// Output: pos = 2, neg = 3

function countPositiveNegative(list1){
    pos=0
    neg=0
    for(i of list1){
        if(i>0){
            pos+=1
        }
        else{
            neg+=1
        }
    }
    console.log(`pos = ${pos} ,neg = ${neg}`)
}
countPositiveNegative([2, -7, 5, -64, -14])