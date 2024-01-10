class HangmanGame {
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-container");
        this.gameEndScreen = document.getElementById("game-over");
        this.gameOver= document.getElementById("popup");
        this.endGameText= document.getElementById("endGame");
        this.message= document.getElementById("message")
        this.words=allWords;
        this.lettersGuessed=[];
        this.lettersFailed=0;
        this.pickedWord=[];
        this.chosenWord=this.pickedWord.word;
        
        
    }
   
   pickWord(){
    const randomIndex= Math.floor(Math.random()*this.words.length)
    this.pickedWord = this.words[randomIndex]
    return this.chosenWord= this.pickedWord.word
    }
    
    createList(){
        for(let i=0; i<this.chosenWord.length; i++){
        const ul= document.getElementById("lines")
        const li= document.createElement('li');
        this.character= document.createTextNode(this.chosenWord[i]);
        ul.appendChild(li)
        } 
    }
    showHint(){
        const hintText= document.getElementById('hint')
        hintText.innerHTML += `${this.pickedWord.hint}` 
    }
    chekIfCommonLetters(randomWord,letter){
        for(let i=0; i<randomWord.length; i++){
            if(randomWord.includes(letter.toLowerCase())){
            return true
             }
            else {
            return false
            }
        } 
    }

    checkIfFinished(){
        if (this.lettersFailed===6){
            this.gameOver.style.display='flex'
            this.endGameText.innerHTML=`The correct answer was: ${this.chosenWord.toUpperCase()}` 
            this.message.innerHTML= 'Sorry, you lost the game. Better luck next time!'
            
        }if(this.lettersGuessed.length===this.chosenWord.length){
            this.gameOver.style.display='flex'
            this.endGameText.innerHTML= 'Excellent job! Another word conquered!'
        }

    }
}