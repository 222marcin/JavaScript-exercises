let sentence = "This is my long sentence, please break it up on the display";
let maxDisplay = 12;

while (sentence.length > maxDisplay) {
        
let lastIndexOfSentence = sentence.lastIndexOf(" ", maxDisplay);
let newSentence = sentence.slice(0, lastIndexOfSentence);
console.log(newSentence);
sentence = sentence.slice(lastIndexOfSentence + 1);


}

console.log(sentence);
