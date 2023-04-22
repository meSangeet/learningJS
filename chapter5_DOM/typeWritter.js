let target = document.getElementsByClassName("changing-text")[0];

console.log(document.getElementsByClassName("changing-text")[0]);

target.textContent = "";

let arrayOfPhrases = ["phrase1", "phrase2","phrase3", "phrase4"]

let sizeOfPhraseArray = arrayOfPhrases.length;

        let n = 0;

        let letterIndex = 0;
        let phraseIndex = 0;
        function clearLetters(phrase)
        {
            if(letterIndex > -1)
            {
                let updatedPhrase = "";
                for(let i = 0; i<letterIndex; i++)
                {
                    updatedPhrase += phrase[phraseIndex][i];
                }
                letterIndex--;
                target.textContent = updatedPhrase;
                setTimeout(()=>{clearLetters(phrase)}, 100)
            }else{
                letterIndex++;
                phraseIndex = (phraseIndex+1)%sizeOfPhraseArray;
                setTimeout(()=>{typewritter(phrase)}
            , 100);
            }
            
        }
        function typewritter(phrase) {

            if(letterIndex === phrase[phraseIndex].length)
            {
                clearLetters(phrase);
            }else if(letterIndex < phrase[phraseIndex].length){
            target.textContent += phrase[phraseIndex][letterIndex];
            letterIndex++;
            setTimeout(()=>{typewritter(phrase)}
            , 300);
        }
        }
        
        typewritter(arrayOfPhrases);
console.log(sizeOfPhraseArray);