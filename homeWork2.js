let array = [1,6,23,8,4,8,3,7];
// sum of all elements
function sumElements(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = array[i] + sum;
    }
    console.log("Sum of all array's elements:  ", sum);
};
sumElements(array);



// sum of first and last element

let popedElement = array.pop();
let shiftedElement = array.shift();
console.log("Sum of first and last element: ", popedElement + shiftedElement);

// copy in reverse order

let array2 = [1,6,23,8,4,8,3,7];
function reverse(array2) {
    let output = [];
    for (let j = array2.length; j > 0; j--){
        output.push(array2.pop());
    }
    return output;
}

console.log("Reverse order: ", reverse(array2));


// return array in random order Fisher Yates

let array3 = [1,6,23,8,4,8,3,7];

for (i = array3.length -1; i > 0; i--) {
  j = Math.floor(Math.random() * i)
  k = array3[i]
  array3[i] = array3[j]
  array3[j] = k
}
console.log(array3);

// the sum of the odd items

let array4 = [1,6,23,8,4,98,3,7,3,98,4,98];
let filteredArray4 = array4.filter(number => number %2 !== 0);
//console.log(filteredArray4);
function sumOfFilteredArray4(filteredArray4) {
    let sum = 0;
    for (let i = 0; i < filteredArray4.length; i++) {
        sum = filteredArray4[i] + sum;
    };
    console.log("Sum of the odd items: ", sum);
};
sumOfFilteredArray4(filteredArray4);

// add even items and subtract odd ones

let array5 = [1,6,23,8,4,98,3,7,3,98,4,98];
function sumOfArray5(array5){
    let sum = 0;
    for (let i = 0; i < array5.length; i++){
        if (array5[i] %2 == 0) {
            sum = sum + array5[i]}
            else {sum = sum - array5[i]}; 
        };
        console.log(sum);
    };
sumOfArray5(array5);

// days till Friday

    let today = new Date();
    let dayNumber = today.getDay();
    if (dayNumber < 5) {console.log("Days till Friday: ", 5 - dayNumber);

    } else  {console.log("Days till Friday: ", 5 - dayNumber + 7);

    };
    
    