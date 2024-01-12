class HangmanGame {
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-container");
        this.gameEndScreen = document.getElementById("game-over");
        this.gameOver= document.getElementById("popup");
        this.endGameText= document.getElementById("endGame");
        this.message= document.getElementById("message")
        this.chooseLevel= document.getElementById("levels")
        this.words;
        this.lettersGuessed=0;
        this.lettersFailed=0;
        this.pickedWord=[];
        this.chosenWord=this.pickedWord.word;
        this.randomMessageArr=endGameMessage;
        this.endOfGameMessage
        
        
    }
   
   pickWord(){
    const randomIndex= Math.floor(Math.random()*this.words.length)
    this.pickedWord = this.words[randomIndex]
    return this.chosenWord= this.pickedWord.word
    }
    
    createList(chosenWord){
        for(let i=0; i<this.chosenWord.length; i++){
        const ul= document.getElementById("lines")
        const li= document.createElement('li');
        li.className=`${this.chosenWord[i]}`
        li.id= "word-letter"
        ul.appendChild(li)
        } 
    }
    showHint(){
        const hintText= document.getElementById('hint')
        hintText.innerHTML += `${this.pickedWord.hint}` 
    }
    chekIfCommonLetters(randomWord,letter){
        
        for(let i=0; i<randomWord.length; i++){
            if(randomWord.charAt(i)===letter.toLowerCase()){
                
            }
            if(randomWord.includes(letter.toLowerCase())){
                
                document.querySelectorAll(`.${letter.toLowerCase()}`)
                for(let j=0; j<document.querySelectorAll(`.${letter.toLowerCase()}`).length; j++){
                    document.querySelectorAll(`.${letter.toLowerCase()}`)[j].innerHTML = letter.toLowerCase()
                    this.lettersGuessed+=1
                }
                console.log(this.lettersGuessed)
            return true
             }
            else {
            return false
            }
        } 
    }

    randomEndOfGameText(){
        const randomMessage= Math.floor(Math.random()*this.randomMessageArr.length)
        this.endOfGameMessage = this.randomMessageArr[randomMessage]
        return this.endGameText.innerHTML= this.endOfGameMessage
    }
    checkIfFinished(){
        if (this.lettersFailed===6){
            this.gameOver.style.display='flex'
            this.endGameText.innerHTML=`The correct answer was: ${this.chosenWord.toUpperCase()}` 
            this.message.innerHTML= 'Sorry, you lost the game. Better luck next time!'
            
        }if(this.lettersGuessed===this.chosenWord.length){
            this.gameOver.style.display='flex'
            this.randomEndOfGameText()
           
        }
    }
}