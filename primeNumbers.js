function isPrime(num) { // returns boolean
  if (num <= 1) return false; // negatives
  if (num % 2 == 0 && num > 2) return false; // even numbers
  const s = Math.sqrt(num); // the square root of a number
  for(let i = 3; i <= s; i = i + 2) { // start from 3, stop at the square, increment in twos
      if(num % i === 0) return false; // modulo shows a divisor was found
  }
  return true;
}
console.log(isPrime(13));

let add = Math.sqrt(13);
console.log(add);
