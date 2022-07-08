console.log(".....welcome to the computer version of Kon Banega Crorpati.....");
const user_Input=require("readline-sync");
let player_name=user_Input.question("please enter your name:-");
let player_city=user_Input.question("please enter your city name:-");
console.log(player_name,"let's play the Game ^_^....")

function question(){
    question_list=[
    "How many continents are there?",
    "What is the capital of India?",
    "NG mei kaun se course padhaya jaata hai?"]
    return(question_list);
}
let a=question();

function options(){
    options_list=[
    ["Four", "Nine", "Seven", "Eight"],
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]]
    return(options_list);
}
let b=options();

function solution(){
    solution_list=[3, 4, 1]
    return(solution_list);
}
let c=solution();

function lifeline_options(){
    lifeline=[["Seven", "Eight"],["Chennai", "Delhi"],["Software Engineering", "Counseling"]];
    return(lifeline);
}
let d=lifeline_options();

function lifeline_solution(){
    solve=[1,2,1]
    return(solve);
}
let e=lifeline_solution();

count=0
for(var i=0;i<a.length;i++){
    console.log(a[i]);
    for(var j=0;j<b[i].length;j++){
        console.log(j+1,b[i][j]);
    }
    if (count==0){
        let life_line=user_Input.question("do you want life line yes/no:-");
        if(life_line==="yes"){
            count+=1
            console.log("you have only two options...");
            console.log(1,d[i][0]);
            console.log(2,d[i][1])
            lifeline_answer=user_Input.questionInt("please enter your answer:-")
            if(lifeline_answer===d[i]){
                console.log("your answer is correct  \n");
            }
            else{
                console.log("your answer is incorrect \n");
                console.log("your life line is finish");
            }

        }
        else{
            let answer=user_Input.questionInt("please enter your answer:-");
            if(answer===c[i]){
                console.log("your answer is correct  \n");
            }
            else{
                console.log("your answer is incorrect \n");
                console.log( "you loss the game and you are out of the game now");
                break;
            }
        }
    }
    else{
        let answer=user_Input.questionInt("please enter your answer:-");
        if(answer===c[i]){
            console.log("your answer is correct  \n");
        }
        else{
            console.log("your answer is incorrect \n");
            console.log( "you loss the game and you are out of the game now");
            break;
        }
    }
}