const { sum, getLargest } = require("./script.js");

// test function 1st parameter is a string which the name of our test
// 2nd parameter is a function, inside the function every code is our test

describe("#sum", () => {
  test("it adds 2 numbers correctly", () => {
    const a = 2;
    const b = 3;
    expect(sum(a, b)).toBe(5);
  });
});

describe("#getLargest", () => {
  test("it returns largest number from the array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(getLargest(arr)).toBe(5);
  });

  describe('with an empty array', () => {
    test("It returns null when given and empty array to getLargest func", () => {
      expect(getLargest([])).toBeNull();
    });
  });
});
