const numbers = [5,62,21,54,22,10,5,9];
const result = numbers.map((currentEl, index) => {

    if( index % 2 ===0){
        return currentEl;}
        else {
            return currentEl * 2;
        
    }
});
console.log(result);

fff