// Q8.Write a Python function that accepts a string and calculate the number of upper case letters and lower case letters. Go to the editor
// Sample String : 'The quick Brow Fox'
// Expected Output :
// No. of Uppercase characters : 3
// No. of Lower case Characters : 12

function character(str1){
    count_upper=0
    count_lower=0
    for (i of str1){
        if (i>="a" && i<="z"){
            count_lower+=1
        }
        else if(i>="A" && i<="Z"){
            count_upper+=1
        }
    }
    console.log("No. of Uppercase characters :",count_upper)
    console.log("No. of lowercase characters :",count_lower)
}
character('The quick Brow Fox')