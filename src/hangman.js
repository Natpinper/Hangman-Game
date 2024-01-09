class HangmanGame {
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-container");
        this.gameEndScreen = document.getElementById("game-over");
        this.words=allWords;
        this.lettersGuessed=[];
        this.lettersFailed=0;
        this.pickedWord=[];
        this.chosenWord=this.pickedWord.word
        
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
   chekIfCommonLetters(element,letter){
        for(let i=0; i<element.length; i++){
            if(element.includes(letter.toLowerCase())){
             return this.lettersGuessed+= letter, true
             }
            else if(!element.includes(letter)){
            return this.lettersFailed++ , false
            }
        } console.log(this.lettersGuessed)
    }

    checkIfFinished(){
        if (this.lettersFailed===6){
            return true
        }if(this.lettersGuessed===this.pickedWord.split("")){
            return true
        }if(this.lettersFailed<6 && this.lettersGuessed!==this.pickedWord.split("")){
            return false
        }
    }
}
