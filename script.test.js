const script = require("./script");
test("adds 2 + 3 to equal 5", () => {
  expect(script.addNum(2, 3)).toBe(5);
});

test("clone an object", () => {
  expect(script.cloneObj({ a: 1, b: 2 })).toBe({ a: 1, b: 2 });
});
