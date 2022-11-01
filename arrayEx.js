//let myArray = [1,[2,3,[4,5]],6];
///console.log(myArray[0]); // 1
//console.log(myArray[1][1]); // 3
//console.log(myArray[1][2][1]); // 5


//let numbers = [
  //  [0, 0, 0],
   // [0, 0, 0],
   // [0, 0, 0]
// ];
// numbers[2][2] = "X";
// numbers[1][1] = "X";
// numbers[2][2] = 0;
// console.log(numbers);

// console.log(typeof numbers) // "object"
// console.log(Array.isArray(numbers)) // true


//let myArray = ["Hello", "world", "!"];
//for (let i = 0; i < myArray.length; i++) {
//console.log(myArray[i]);
//};
//console.log(myArray);

//let myArray = [1,2,3,4];
//myArray.push(5);
//console.log(myArray);

//let poopedArray = myArray.pop();
//console.log(poopedArray);
//console.log(myArray);

//let myArray2 = [1,2,3,4];
//myArray2.unshift(5);
//console.log(myArray2);

////let shiftedArray2 = myArray2.shift();
//console.log(shiftedArray2);
//console.log(myArray2);


//let myArray3 = [1,2,3,4];
////let slicedElements = myArray3.slice(1, 3);
///console.log(myArray3); // [1,2,3,4]
//console.log(slicedElements) // [2,3]

//let myArray4 = [1,2,3,4,5,6,7,8];
//let splicedElements = myArray4.splice(3, 3);
//console.log(myArray4); // [1,4]
//console.log(splicedElements); // [2,3]
//myArray4.splice(2,0,"a","b","c");
//console.log(myArray4); // [1,"a","b","c",4]

//function capitalizeAndLog(text) {
  //  text = text[0].toUpperCase() + text.slice(1);
    //console.log(text);
    //}
    //capitalizeAndLog("hello there!"); // "Hello there!"

   
   //let myText = "this is text";
    //function capitalizeText(myText) {

     //myText = myText[0].toUpperCase() + myText.slice(1);
    //return myText;
    //}
    
   // console.log(capitalizeText(myText));
   
    //let number = undefined;
    //console.log(typeof number);

    //let myNumber = 123.45678;
//console.log(myNumber.toFixed(0)); // "123.45"
//console.log(typeof myNumber.toFixed(2)) // "string" !!!
//console.log(myNumber); // 123.45678

let myArray = [1,2,3,4,5,6,7,8];
let slicedElements = myArray.splice(1,3);
console.log(myArray); // [1,2,3,4]
console.log(slicedElements);

let myNumber = 12;
let myModulo = myNumber % 3;
console.log(myModulo); // 1


