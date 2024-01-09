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
     function clickedButton(event){
      let button= event.target
      let buttonText= button.innerHTML
      let element= (hangmanGame.chosenWord).toLowerCase()
      console.log(buttonText)
      console.log(element)
      if(hangmanGame.chekIfCommonLetters(element,buttonText)===false){
         let chances= document.getElementById("chances");
         chances.innerHTML= `${hangmanGame.lettersFailed}/6` 
      }
      if(hangmanGame.chekIfCommonLetters(element,buttonText)===true){
         console.log(hangmanGame.lettersGuessed)
      }
     } 
   
     let buttons= document.querySelectorAll('#myButton')
     buttons.forEach(function(button){
      button.addEventListener('click',clickedButton)
     })


   hangmanGame.startGame()
   hangmanGame.clickedButton()
 }
