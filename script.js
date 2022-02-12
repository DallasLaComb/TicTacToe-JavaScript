let buttons = document.getElementsByClassName("button");
let gameOver = false;
let winner = document.getElementsByClassName("announcement");
let restart = document.getElementsByClassName("restart");
// Initializing objects from HTML to variables.

var winConditions= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
//Win Conditions

function initializeBoard(){
    for(let i=0;i<buttons.length;i++){
        buttons[i].innerHTML = '';
        buttons[i].style.backgroundColor = "rgba(255,255,255,.9)";
    }
}


function checkWin(){
 for(let i=0;i<winConditions.length;i++){
    if((buttons[winConditions[i][0]].innerHTML == buttons[winConditions[i][1]].innerHTML && buttons[winConditions[i][1]].innerHTML != '' && buttons[winConditions[i][0]].innerHTML!='')&&(buttons[winConditions[i][0]].innerHTML == buttons[winConditions[i][2]].innerHTML)){
     winner[0].innerHTML = buttons[winConditions[i][0]].innerHTML + " IS THE WINNER"
     gameOver = true;
     buttons[winConditions[i][0]].style.backgroundColor = "lime";
     buttons[winConditions[i][1]].style.backgroundColor = "lime";
     buttons[winConditions[i][2]].style.backgroundColor = "lime";
    //  Add a restartGame();
    }
    else{
        continue;
    }
}
}


function restartGame(){
    restart[0].addEventListener("click",function(){
        window.location.reload(true);
    })
}



function playerTurn(){
    let turn = "X";
    for (let i=0;i<buttons.length;i++){
    
        buttons[i].addEventListener("click", function(){
            if(buttons[i].innerHTML==''&& gameOver == false){
            buttons[i].innerHTML = turn;
           
        }
        else{
        
        }
            if(turn=="X"){
                turn="O"
            }else{
                turn="X"
            }
            checkWin()
        })
    }
}






initializeBoard();
playerTurn();
restartGame()



