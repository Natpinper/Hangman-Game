let hangmanGame= new HangmanGame()
window.onload= function(){
    hangmanGame.startScreen.style.display= "flex";
    hangmanGame.gameScreen.style.display= "none";
    const startButton = document.getElementById("btnStart");
    const easyButton= document.getElementById("easy");
    const mediumButton= document.getElementById("medium");
    const hardButton= document.getElementById("hard")
    startButton.addEventListener("click",function(){
      initializeGame()
    });

    function initializeGame(){
      hangmanGame.startScreen.style.display= "none";
      hangmanGame.chooseLevel.style.display= "flex";

      easyButton.addEventListener("click", function(){
         startGameEasy()
      } )
      mediumButton.addEventListener("click", function(){
         startGameMedium()
      } )

      hardButton.addEventListener("click", function(){
         startGameHard()
      })
    }

    function startGameEasy(){
        hangmanGame.startScreen.style.display= "none";
        hangmanGame.chooseLevel.style.display= "none";
        hangmanGame.gameScreen.style.display= "flex";
        hangmanGame.words= easy
        hangmanGame.pickWord(easy);
        hangmanGame.createList(hangmanGame.chosenWord);
        hangmanGame.showHint();    
     }  
     function startGameMedium(){
      hangmanGame.startScreen.style.display= "none";
      hangmanGame.chooseLevel.style.display= "none";
      hangmanGame.gameScreen.style.display= "flex";
      hangmanGame.words= medium
      hangmanGame.pickWord(medium);
      hangmanGame.createList(hangmanGame.chosenWord);
      hangmanGame.showHint();    
   } 
      function startGameHard(){
         hangmanGame.startScreen.style.display= "none";
         hangmanGame.chooseLevel.style.display= "none";
         hangmanGame.gameScreen.style.display= "flex";
         hangmanGame.words= hard
         hangmanGame.pickWord(hard);
         hangmanGame.createList(hangmanGame.chosenWord);
         hangmanGame.showHint();   
      }
   
     function clickedButton(event){
      let button= event.target
      let buttonText= button.innerHTML
      let element= (hangmanGame.chosenWord).toLowerCase()
      button.style.backgroundColor="rgb(68, 140, 131)"
      if(hangmanGame.chekIfCommonLetters(element,buttonText)===false){
         hangmanGame.lettersFailed+=1
         let chances= document.getElementById("chances");
         chances.innerHTML= `${hangmanGame.lettersFailed}/6`
      }
      if(hangmanGame.chekIfCommonLetters(element,buttonText)===true){
         hangmanGame.lettersGuessed+=1
      }
      let stickFigure= document.getElementById("stickman")
      if(hangmanGame.lettersFailed===1){
         stickFigure.src= "/Hangman-Game/style/images/Hangman 2.jpg"
      }
      if(hangmanGame.lettersFailed===2){
         stickFigure.src="/Hangman-Game/style/images/Hangman 3.jpg"
      }
      if(hangmanGame.lettersFailed===3){
         stickFigure.src="/Hangman-Game/style/images/Hangman 4.jpg"
      }
      if(hangmanGame.lettersFailed===4){
         stickFigure.src="/Hangman-Game/style/images/Hangman 5.jpg"
      }
      if(hangmanGame.lettersFailed===5){
         stickFigure.src="/Hangman-Game/style/images/Hangman 6.jpg"
      }
      if(hangmanGame.lettersFailed===6){
         stickFigure.src="/Hangman-Game/style/images/Hangman 7.jpg"
      }
      
       button.removeEventListener('click',clickedButton)

       hangmanGame.checkIfFinished()
   }
   
     let buttons= document.querySelectorAll('#myButton')
      buttons.forEach(function(button){
      button.addEventListener('click',clickedButton)
     })

   hangmanGame.initializeGame()
   hangmanGame.startGame()
   hangmanGame.clickedButton()
   
 }
 
