// let v1 = null;
// let v2 = 0;
// let v3 = false;
// let v4 = 100;
// let v5 = 200;
// let v6 = 300;
// let v7 = [1,2,3];

// console.log(v4 && v5 && v2); // szuka w pierwszej kolejnosc falsy, truely wyswietla najbardziej po prawej

// console.log(v6 || v2); // szuka w pierwszej kojejnosci truely, falsy wyswietla najbardziej po lewej

// console.log(typeof v7);

// let v1 = 4;
// let v2 = 10;
// let v3 = 3;
// let v4 = false;
// let v5 = 0;
// console.log(v1 > 5 && v2 < 100);
// console.log(v1 > 5 || (v2 < 100 && v3 === 3));
// console.log(!v1);
// console.log(!v5);
// console.log(!!v5);
// console.log(v1 && v2);
// console.log(v1 || v2);
// console.log(v4 && v5);
// console.log(v4 || v5);

// console.log(0 && "");
// console.log(0 || "");
// console.log(4 && {});
// console.log(4 || {});

// let myArray = [1,2,3,4,5,6];
// myArray.push(7);
// //console.log(myAddArray);
// console.log(myArray);
// myArray.unshift(0);
// console.log(myArray);
// myArray.shift();
// console.log(myArray);
// myArray.pop();
// console.log(myArray);

// function getHello() {
//     return "Hello";
//     };
//     console.log(getHello());


// function copyArrayAndDivideBy2(array) {
//     let output = [];
//     for (let i = 0; i < array.length; i++) {
//     output.push(array[i] + "a");
//     }
//     return output;
//     }
//     let myArray = [1,2,3];
//     let result = copyArrayAndDivideBy2(myArray);
//     console.log(result); // [0.5, 1, 1.5]

// function copyAndManipulate(array, instructions) {
//     let output = [];
//     for (let i = 0; i < array.length; i++) {
//     output.push(instructions(array[i]));
//     }
//     return output;
//     }
//     let myArray = [1,2,3];
//     function add2(number) { return number + 2; }
//     let result = copyAndManipulate(myArray, add2);
//     console.log(result);


// let array = [1,2,3];
// function newArray(array) {
//     let array2 = [];
//     for (let i = 0; i < array.length; i++) {
//         array2.unshift(array[i] + 2);
//     }
//     return array2;
// }
// console.log(newArray(array));


var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(i => i.length === 5);

console.log(result);






