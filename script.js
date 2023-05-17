function sum(a, b) {
  return a + b;
}

function getLargest(arr) {
  if (!arr.length) return null;

  return arr.reduce(
    (largest, currentNumber) =>
      currentNumber > largest ? currentNumber : largest,
    arr[0]
  );
}

module.exports = {
  sum,
  getLargest
}
