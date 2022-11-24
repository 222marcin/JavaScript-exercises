// const myCharacter = {
//     "my name": "Bob",
//     level: 1,
//     class: "Warrior",
//     items: "sword",
//     //mojaFunkcja() {
//         //console.log("to jest moja funkcja");
//     }
//     //}
//     const myKeys = Object.entries(myCharacter);
//     console.log(myKeys);
//     for (let i = 0; i < myKeys.length; i++) {
//         console.log(myKeys[i]);
//     };


// tablice nawiasy kwadratowe

// const user = ["John", "Snow", "some", "Ala", "pies", "kot"];
// const [firstName, surName, ...restData] = user;
// console.log(firstName);
// console.log(surName);
// console.log(restData);
// for (let i = 0; i < user.length; i++) {
//     console.log(user[i]);
// };


// // obiekty klamry
// const car = {
//     brand: "Toyota",
//     model: "Rav4",
//     year: 2010
// };
// const {model, year} = car;
// console.log(model);
// console.log(year);

// let userName = ["Adam", "Maciek", "Ania", "Kasia"];
// for (i = 0; i < userName.length; i++) {
//     console.log("Welcom " + userName[i]);
// };

// userName.forEach(mojaFunkcja);
// function mojaFunkcja(currentElement) {
//     console.log("Welcome " + currentElement);
// };

// const numbers = [2,9,10,10,203,20,15,9,3,33,40,402];
// numbers.sort();
// console.log(numbers);

// const numbers = [2,9,10,10,203,20,15,9,3,33,40,402];
// numbers.sort((a, b) => b-a);
// console.log(numbers);



    // function add2(number) { return number + 2; }
    // const myArray = [1,2,3];
    // const result = myArray.map(add2);
    // console.log(result); // [3,4,5]

    // const numbers = [10,5,3, 2, 9, 4, 8, 6, 3, 7];

    // function mulitiply(element, index){ 
    //     if(index % 2 === 0){
    //     return element * 2}
    // else return element;
    // };

    // const wynik = numbers.map(mulitiply);
    // console.log(wynik);

    // function add(accumulator, currentElemnt) {return accumulator - currentElemnt};
    // const result = numbers.reduce(add,0);
    // console.log(result);

    const numbers = [2,2,2,3];

    function addSub(a,b) {
        if (b % 2 === 0) {
            return a + b}
            else return a - b;
        };
    
    const result = numbers.reduce(addSub);
    console.log(result);