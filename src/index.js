let hangmanGame= new HangmanGame()
window.onload= function(){
    hangmanGame.startScreen.style.display= "flex";
    hangmanGame.gameScreen.style.display= "none";
    const startButton = document.getElementById("btnStart");
    const restartButton= document.getElementById("restart-button");
    startButton.addEventListener("click",function(){
       startGame() 
    });
    

    function startGame(){
        hangmanGame.startScreen.style.display= "none";
        hangmanGame.gameScreen.style.display= "flex";
        hangmanGame.pickWord(allWords);
        hangmanGame.createList();
        hangmanGame.showHint()
            
     }  
  
     hangmanGame.startGame()
}

 

