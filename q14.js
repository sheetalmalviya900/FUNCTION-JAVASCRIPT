// Q14.Write a function to check if a number is prime or not.

function prime(number){
    count=0
    for (i=1;i<=number;i++){
        if(number%i==0){
            count+=1
        }
    }
    if (count==2){
        console.log("prime number")
    }
    else{
        console.log("not a prime number")
    }
}
prime(37)