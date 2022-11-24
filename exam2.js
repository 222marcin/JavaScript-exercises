
// deck of cards: H - heart♡, D - diamond♢, C - club♠, S - spade♣  1==10
let array = ["2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "1H", "JH", "QH", "KH", "AH", 
"2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "1D", "JD", "QD", "KD", "AD",
"2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "1C", "JC", "QC", "KC", "AC",
"2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "1S", "JS", "QS", "KS", "AS"];

// shuffling and drawing 5 random cards
let arrayCardsOnHand = array.sort(() => Math.random() - Math.random()).slice(0, 5);

console.log("I got these cards: ", arrayCardsOnHand);

// this function returns what you have in your hand
function whatYouHaveOnhand() {

    let rankArray = []; // figura lub numer (1 == 10)
    let suitArray = []; // kolor
    
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "1", "J", "Q", "K", "A"]
    const suits = ["C", "D", "H", "S"]

    // sorting cards on hand
    function sorted(arrayCardsOnHand) { 
        let sortedHand = [];
        for (let i = 0; i < ranks.length; i++) {
            for (let j = 0; j < arrayCardsOnHand.length; j++ ) { 
                if (ranks[i] === arrayCardsOnHand[j].charAt(0)) { // zwraca znak o indeksie "0"
                    sortedHand.push(arrayCardsOnHand[j])
                }
            }   
            // console.log(sortedHand);
        }
        return sortedHand;
        
    }
    
// start function "sorted" to sort cards
    
let sortedCardsOnHand = sorted(arrayCardsOnHand); 
   
// now we have sorted cards in our hands
    console.log("My sorted cards :", sortedCardsOnHand);

   //this function split arrayCardsOnHand and create new 2 arrays contain #1rank and #2suit
    
    function suitAndRank2Arrays() { 
        for (i = 0; i< sortedCardsOnHand.length; i++) { 
            rankArray.push(sortedCardsOnHand[i].charAt(0))
            suitArray.push(sortedCardsOnHand[i].charAt(1)) 
        } 
    console.log(rankArray);
    console.log(suitArray);
    }
    
    suitAndRank2Arrays(sortedCardsOnHand); 
    

    function countSuites(suitArray) {
        let suitCount = {};
        suitArray.forEach((element) => {suitCount[element] = (suitCount[element] || 0)+1;  } );
            return suitCount;
            
    };
    
console.log(countSuites(suitArray));

    function countRanks(rankArray) {
        let rankCount = {};
        rankArray.forEach((element) => { rankCount[element] = (rankCount[element] || 0)+1; });
            return rankCount;
    }
    
    console.log(countRanks(rankArray));

    function isFlush() {
        let cS = countSuites(suitArray);
        if(Object.keys(cS).find(key => cS[key] === 5)) {
            return true;
        } else {
            return false;
        }
    }
    
    function isStraight() {
        let index = ranks.indexOf(rankArray[0])
        let ref = ranks.slice(index, index + 5).join("")
        let section = rankArray.slice(0).join("")
            if (section === "1JQKA" && section === ref) {
                return "ROYALSTRAIGHT";
            } else if (section === "A2345" || section === ref) {
                return "STRAIGHT"; 
            }else {
                return "FALSE";
            }
    }
    
    function pairs() {
        let rS = countRanks(rankArray)
        return Object.keys(rS).filter((key) => rS[key] === 2).length
    }
    
    
    function whichHand() {
        let rS = countRanks(rankArray)
        if (isFlush() === true && isStraight() === "ROYALSTRAIGHT") {
            console.log('Royal Flush')
        } else if (isFlush() === true && isStraight() === "STRAIGHT") {
            console.log("Straight Flush")
        } else if (Object.keys(rS).find(key => rS[key] === 4)) {
            console.log("Four of a Kind")
        } else if (Object.keys(rS).find(key => rS[key] === 3) && pairs() === 2) {
            console.log("Full House")
        } else if (isFlush() === true) { // problem here as isFlush is a function not a variable, otherwise it returns undefined
            console.log("Flush")
        } else if (isStraight() === "STRAIGHT") { // problem again, isStraight is a function too so it should be isStraight() instead of isStraight, otherwise it returns undefined
            console.log("Straight")
        } else if (Object.keys(rS).find(key => rS[key] === 3)) {
            console.log("Three of a Kind")
        } else if (pairs() === 2) {
            console.log("Two Pair")
        }else if(pairs() === 1) {
            console.log("Pair")
        }else {
            console.log('High Card', rankArray[rankArray.length-1])
        }
    }
    
      return whichHand();
    }
    
    // const hands = ['Royal flush', 'Straight flush', 'Four of a kind', 'Full house',
    //     'Flush', 'Straight', 'Three of a kind', 'Two pairs', 'Pair', 'High card']  
    //     //compare ranks of hands and return results 
    
    whatYouHaveOnhand();