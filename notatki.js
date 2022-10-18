let zdanie = "Marcin cackowski to jest chlop z wioski";
let maksDlugosc = 10;
while (zdanie.length > maksDlugosc) {
    indeksCiecia = zdanie.lastIndexOf(" ",maksDlugosc);
    noweZdanie = zdanie.slice(0, indeksCiecia);
    console.log(noweZdanie);
    zdanie = zdanie.slice(indeksCiecia +1);

}; 
console.log(zdanie);
