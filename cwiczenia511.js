const numbers = [5,62,21,54,22,10,5,9];
const result = numbers.map((currentEl, index) => {

    if( index % 2 ===0){
        return currentEl;}
        else {
            return currentEl * 2;
        
    }
});
console.log(result);

function firstArrayIndex () {
    
    //   for (let i = 0; i < firstArray.length; i++) {
    //   if (firstArray[i] > firstArray[i + 1]) 
    //   return console.log("The heaviest ball is on the index: ", firstArray.indexOf(firstArray[i]))
    //   };
    //   return console.log("The heaviest ball is on the index: ", firstArray.indexOf(firstArray[2]));
      
    // }
    // firstArrayIndex();
    // }