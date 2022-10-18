let longSentence = "Hello, this is my long sentence, pleasy break it up on the display";
let DISPLAY_SIZE = 12;

while(longSentence.length > DISPLAY_SIZE){
indexOfLastSpace = longSentence.lastIndexOf(" ", DISPLAY_SIZE);
partOfSentence = longSentence.slice(0, indexOfLastSpace);

console.log(partOfSentence);
longSentence = longSentence.slice(indexOfLastSpace + 1);
};
console.log(longSentence);