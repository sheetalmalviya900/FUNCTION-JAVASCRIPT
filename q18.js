// Write a function for checking the speed of drivers. This function should have one parameter: speed.
// If speed is less than 70, it should print “Ok”.
// Otherwise, for every 5km above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points. For example, if the speed is 80, it should print: “Points: 2”.
// If the driver gets more than 12 points, the function should print: “License suspended”


function speed(speed){
    if(speed<=70){
        console.log("OK")
    }
    else if(speed>70){
        point=0
        for(i=75;i<=speed;i+=5){
            point+=1
        }
        if (point<=12){
            console.log(point)
        }
        else{
            console.log('license suspend')
        }
    }
}
speed(80)