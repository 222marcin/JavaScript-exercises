let dna = require('./brca1.json');
let startIndex = dna.indexOf('atg');
let geneOutput = "";
let endIndex = startIndex;
let litera = "tag" || "taa" || "tga";
while (!geneOutput) {
endIndex = dna.indexOf(litera, endIndex + 3);
let geneCandidate = dna.slice(startIndex, endIndex + 3);
if (geneCandidate.length % 3 === 0) {
geneOutput = geneCandidate + ".......";
}
if (endIndex === -1) {
geneOutput = 'No gene';
}
console.log(geneOutput);
}
//function NumberOfGenes(geneOutput) {
    const tablica = geneOutput.split(" ");
    return tablica
