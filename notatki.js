// let zdanie = "Marcin cackowski to jest chlop z wioski";
// let maksDlugosc = 10;
// while (zdanie.length > maksDlugosc) {
//     indeksCiecia = zdanie.lastIndexOf(" ",maksDlugosc);
//     noweZdanie = zdanie.slice(0, indeksCiecia);
//     console.log(noweZdanie);
//     zdanie = zdanie.slice(indeksCiecia +1);
 
// }; 
// console.log(zdanie);

// let array = ["C", "D", "H", "S"]

// function countSuites() {
//     let suitCount = {};
//     array.forEach((x) => { suitCount[x] = (suitCount[x] || 0)+1; });
//         return suitCount;
        
// };
// countSuites(array);
// console.log(countSuites(array));

const arr = ['a', 'b', 'c', 'd', 'd'];
function count (arr) {
let obj = {};
arr.forEach(element => {obj[element] = (obj[element] || 0) + 1});

// for (let i=0; i<arr.length; i++) {
//    obj[i] = (obj[i] || 0) + 1 };
   
   return obj;
};
console.log(count(arr));

//suitCount[element] = (suitCount[element] || 0)+1