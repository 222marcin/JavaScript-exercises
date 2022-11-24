const episodes = require('./episodes.json');
const characters = require('./characters.json');
const locations = require('./locations.json');

// "status": "Dead" - how many

function sumOfDead(sum, currentElement) {

    if (currentElement.status === 'Dead') {
        return sum + 1;
    } return sum;
}
const result = characters.reduce(sumOfDead,0);
console.log(result);

const result2 = characters.filter((char) => char.status == 'Dead').length;
console.log(result2);
console.log(Date.now());
console.log(new Date(2018, 3, 15).getTime());


