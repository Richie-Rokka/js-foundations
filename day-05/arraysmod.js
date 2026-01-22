const numbers = [5, 12, 8, 20, 3];

const total = numbers.reduce((sum, current) => {
  return sum + current;
}, 0);

const max = numbers.reduce((highest, current) => {
  if (current > highest) {
    return current;
  }
  return highest;
}, numbers[0]);

const squared = numbers.map((num) => {
  return num * num;
});

console.log("Numbers:", numbers);
console.log("Total:", total);
console.log("Max:", max);
console.log("Squared:", squared);
