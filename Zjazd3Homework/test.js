const financialData = require('./financial.json');

const sumOfMoneyIn2014 = financialData
.filter((year) => year.detailsOfPayent.date.includes("2014"))
.reduce((sum, currentElement) => +(sum) + +(currentElement.cost), 0);
console.log(sumOfMoneyIn2014);
  

// const filteredData = financialData
// .map(({detailsOfPayent, cost}) => detailsOfPayent.company + " " + Number(cost))
// .sort();

// console.log(filteredData);


// let companyName = financialData.map(({detailsOfPayent}) => detailsOfPayent.company);
// let companySpend = financialData.map(({cost}) => Number(cost));
// console.log(companyName);
// console.log(companySpend);

//  for (let i = 0; i < companyName.length; i++) {
//      let newArray = [];
//      newArray[i] = newArray.companyName, newArray.companySpend;
//      console.log(newArray);
// };

// console.log("1");   
 


