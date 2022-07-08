// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

function removeZero(number){
    for(i=number;number>0;i=Math.floor(i/10)){
        a=i%10
        if (a != 0){
            return i
        }
    }
}
console.log(removeZero(960000))