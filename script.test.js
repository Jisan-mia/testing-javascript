const {sum} = require('./script.js')


// test function 1st parameter is a string which the name of our test
// 2nd parameter is a function, inside the function every code is our test

test('it adds 2 numbers correctly', () => {
  const a = 2
  const b = 3
  expect(sum(a,b)).toBe(5)
})
