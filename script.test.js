const addNum = require("./script");
test("adds 2 + 3 to equal 5", () => {
  expect(addNum(2, 3)).toBe(5);
});
