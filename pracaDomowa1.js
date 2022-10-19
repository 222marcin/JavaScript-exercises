let zdanie = "This is an example examply examplu";

// ilosc wyrazow

function CountWord(string)
{

    const tablica = string.split(" ");
    return tablica.filter(slowo => slowo !== "").length;
}

console.log("Ilość wyrazów w zdaniu:  " + CountWord(zdanie));

// ilosc liter a

function CountLetterA(string2) {

    const tablica2 = string2.split("");
    return tablica2.filter(litera => litera == "a").length;
}
console.log("Ilość liter a w zdaniu:  " + CountLetterA(zdanie));

// najdłuzszy wyraz

function longestWord(string3) {
    let tablica3 = string3.split(" ");
    let k = 0;
    let longest_word = "";
    for (let j = 0; j < tablica3.length; j++) {
      if (k < tablica3[j].length) {
        k = tablica3[j].length;
        longest_word = tablica3[j];
      }
    }
    return longest_word;
  };
   
  console.log("Najdluzszy wyraz: " + longestWord(zdanie));

  // ile slow o najwiekszej dlugosci

  let najdluszyWyraz = longestWord(zdanie).length;
  function CountLongestWord(string4) {
    const tablica4 = string4.split(" ");
    return tablica4.filter(word => word.length == najdluszyWyraz).length;

  };
  console.log("Ilosc najdluzszych wyrazow w zdaniu:  " + CountLongestWord(zdanie));

