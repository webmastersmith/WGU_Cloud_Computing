// Combinations and Permutations
function factorial(num) {
  let total = 1;
  if (num < 3) return num;
  while (num > 1) {
    console.log(num);
    total += total * (num - 1);
    num--;
  }
  return total;
}
console.log(factorial(5));

function combinations(total, numOptions) {
  const n = factorial(total);
  // console.log(n);
  const k = factorial(numOptions) * (total - numOptions);
  // console.log(k);
  return n / k;
}
// 4 items total, 3 choices. order doesn't matter.
// you can combine items of 3 from 4 different items, 4 different times.
console.log(combinations(4, 3));

function permutations(total, numOptions) {
  const n = factorial(total);
  const k = total - numOptions;
  return n / k;
}
// 4 total. 24 permutations. order matters.
// you can arrange 3 items from 4 total, 24 times.
console.log(permutations(4, 3));

// probability theory
function round(num, decimalPlaces) {
  let d = +'1'.padEnd(decimalPlaces + 1, '0');
  // console.log(d);
  return Math.round((num + Number.EPSILON) * d) / d;
}
// die is 1 in 6 chances.
console.log(round(1 / 6, 3));
// coin flip
console.log(round(1 / 2, 2));

function andProbability(num1, num2, decimalPlaces) {
  return round(num1 + num2, decimalPlaces);
}
// one die number 2 or 3 odds
// 1 in 6 for each die, then add together. = 1/3 of chance to get 2 or 3.
console.log(andProbability(1 / 6, 1 / 6, 3));

function dependent(num1, num2, decimalPlaces) {
  return round(num1 * num2, decimalPlaces);
}
// deck of cards(4/52), pick 1 ace, leaves 3 aces. pick another ace(3/51). probability.
// 0.0045 chance of getting two Aces in a row.
console.log(dependent(4 / 52, 3 / 51, 4));

// SET Theory

// LOG Theory
function logTheory(a, b) {
  return round(Math.exp(Math.log(a) + Math.log(b)), 0);
}
console.log(logTheory(3, 4));

// Integers can be positive or negative numbers and have no fractional part. They are represented with the ℤ symbol {… -2, -1, 0, +1, +2,…}.
// Rational numbers are fractions (ℚ).
// Real numbers (ℜ) include both integers and rational numbers, and any other number that can be used in a comparison.
// Prime numbers (ℙ) represent the integers which can only be divisible by itself and unity.
// Natural numbers (ℕ) represent positive numbers which are integers {1,2…}.
