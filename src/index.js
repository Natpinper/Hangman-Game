let hangmanGame= new HangmanGame()
window.onload= function(){
    hangmanGame.startScreen.style.display= "flex";
    hangmanGame.gameScreen.style.display= "none";
    const startButton = document.getElementById("btnStart");
    startButton.addEventListener("click",function(){
      startGame()
      
    });
    /*document.addEventListener('DOMContentLoaded',function(){
      gameOver()
    });*/
   
    function startGame(){
        hangmanGame.startScreen.style.display= "none";
        hangmanGame.gameScreen.style.display= "flex";
        hangmanGame.pickWord(allWords);
        hangmanGame.createList();
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
         hangmanGame.lettersGuessed.push(buttonText)
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

     
     
   hangmanGame.startGame()
   hangmanGame.clickedButton()
  
   
 }
 
 