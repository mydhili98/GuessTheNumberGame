'use strict';


let messageElement=document.querySelector('.message');
let displayNumberElement=document.querySelector('.number');
let displayedNumber=displayNumberElement.innerHTML;
let scoreElement=document.querySelector('.score');
    let score=Number(scoreElement.innerHTML);
let randomNumber;
function generateRandomNumber(){
 randomNumber=Math.trunc(Math.random() * 20 + 1);

}
generateRandomNumber();
function setMessage(msg){
messageElement.innerHTML=msg;
}
function checkNumber(){
    let numberGuessed= Number(document.querySelector('.guess').value);
    
    scoreElement=document.querySelector('.score');
     score=Number(scoreElement.innerHTML);
    if(!numberGuessed){
        setMessage("No Number");
    }
    else{
       if(randomNumber==numberGuessed){
        setMessage("You Won");
        displayNumberElement.innerHTML=randomNumber;
        document.querySelector('body').style.backgroundColor="green";
        if(document.querySelector('.highscore').innerHTML<score){
            document.querySelector('.highscore').innerHTML=score;
        } 
       
       }
       else{
        if(score<1){
            setMessage("You Lost");
        }
        else{
            setMessage(numberGuessed>randomNumber ? "Its Higher" : " Its Lower")
            score--;
            console.log(randomNumber, numberGuessed);
            scoreElement.innerHTML=score;
        }
       }
    }
}
function handleAgain(){
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.guess').value="";
    messageElement.innerHTML="Start Guessing";
    scoreElement.innerHTML="10";
    displayNumberElement.innerHTML="?";
    generateRandomNumber();
}
document.querySelector('.check').addEventListener('click',checkNumber);
document.querySelector('.again').addEventListener('click',handleAgain);