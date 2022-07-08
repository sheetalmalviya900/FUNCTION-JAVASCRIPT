// multiples of 3 and 5. Like the below.

function multiplesOfNumbers(limit){
    var sum=0
    for(i=0;i<=limit;i++){
        if(i%3 ===0){
            sum+=i;
        }
        if(i%5 ==0){
            sum+=i;
        }
    }
    console.log(sum);
}
multiplesOfNumbers(10);