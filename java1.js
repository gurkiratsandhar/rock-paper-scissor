let playerSelection
let computerSelection;
let result
let cWin=0
let uWin=0
let final

const buttons=document.querySelectorAll('.btn');
buttons.forEach((button)=>{
    button.addEventListener('click', buttonActivity)})

function buttonActivity(button){
    console.log(button.target)
    playerSelection=button.target.id;
    tex=document.querySelector('.text')
    tex.textContent=playerSelection
    computerSelection=getComputerChoice()
    tex2=document.querySelector('.text1')
    tex2.textContent=computerSelection
    SingleGame(playerSelection,computerSelection);
    re=document.querySelector('.result')
    re.textContent=result
    userScore=document.querySelector('.user.score')
    userScore.textContent=uWin
    computerScore=document.querySelector('.computer.Score')
    computerScore.textContent=cWin;
    if(cWin<5 && uWin<5){
        return;
    }else if(cWin==5){
        final="Computer Won The Tournament";
        re.textContent=final
        buttons.forEach((button)=>{button.removeEventListener('click', buttonActivity)})
    }else{
        final="You Won The Tournament";
        re.textContent=final
        buttons.forEach((button)=>{button.removeEventListener('click', buttonActivity)})
    }
}


function getComputerChoice(){
    var myarray=['Rock', 'Paper', 'Scissor']
    const random= Math.floor(Math.random()*myarray.length)
    let w=myarray[random]
    return w;}

function SingleGame(playerSelection, computerSelection){
    
    if (playerSelection=='Rock'||'Paper'||'Scissor'){
        if(playerSelection=='Rock' && computerSelection=='Rock'){
            result="No Winners";
        }else if(playerSelection=='Rock' && computerSelection=='Paper'){
            result="Computer Won This Match";
            cWin++;
            
        }else if(playerSelection=='Rock' && computerSelection=='Scissor'){
            result="You Won This Match";
            uWin++
            
        }else if(playerSelection=='Paper' && computerSelection=='Rock'){
            result="You Won This Match";
            uWin++
            
        }else if(playerSelection=='Paper' && computerSelection=='Paper'){
            result="No winners In This Match";

        }else if(playerSelection=='Paper' && computerSelection=='Scissor'){
            result="Computer Won This Match";
            cWin++
            
        }else if(playerSelection=='Scissor' && computerSelection=='Rock' ){
            result="Computer Won This Match";
            cWin++
            
        }else if(playerSelection=='Scissor' && computerSelection=='Paper'){
            result="You Won This Match";
            uWin++}
        else if(playerSelection=='Scissor' && computerSelection=='Scissor'){
            result="No Winners In This Match"
        }
    } else{ 
        result="Enter Right Value Next time." 
    }
    console.log(result);

}
