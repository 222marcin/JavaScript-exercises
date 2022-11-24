let array = [1,1,1,1,1,1,1,2];

function randomArray() {
    for (i = array.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = array[i]
        array[i] = array[j]
        array[j] = k
      };
      return array;
};

randomArray(array);
console.log(array);

let firstArray = array.slice(0,3);
let secondArray = array.slice(3,6);
let thirdArray = array.slice(6);
// console.log(firstArray);
// console.log(secondArray);
// console.log(thirdArray);

let sumOfFirstArray = 0;
for (i = 0; i < firstArray.length; i++) {
  sumOfFirstArray = sumOfFirstArray + firstArray[i];
}
// console.log(sumOfFirstArray);

let sumOfSecondArray = 0;
for (let i = 0; i < secondArray.length; i++) {
  sumOfSecondArray = sumOfSecondArray + secondArray[i];
}
// console.log(sumOfSecondArray);


if(sumOfFirstArray > sumOfSecondArray) {

if (firstArray[0] > firstArray[1]) {
  console.log("The heaviest ball is on the index: ", 0)}

if (firstArray[0] < firstArray[1]) {
  console.log("The heaviest ball is on the index: ", 1)}

if (firstArray[0] == firstArray[1]) console.log("The heaviest ball is on the index: ", 2)
};



if(sumOfFirstArray < sumOfSecondArray) {

  if (secondArray[0] > secondArray[1]) {
    console.log("The heaviest ball is on the index: ", 3)}
  
  if (secondArray[0] < secondArray[1]) {
    console.log("The heaviest ball is on the index: ", 4)}
  
  if (secondArray[0] == secondArray[1]) console.log("The heaviest ball is on the index: ", 5)
  };


  if (sumOfFirstArray === sumOfSecondArray) {
 
  if (thirdArray[0] > thirdArray[1]) { 
  console.log("The heaviest ball is on the index: ", 6)}
  
  else console.log("The heaviest ball is on the index: ", 7);
  
};