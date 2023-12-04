const script = require("./script");

/** COMMON MATCHERS */
test("adds 2 + 3 to equal 5", () => {
  expect(script.addNum(2, 3)).toBe(5);
});

// error, .toBe is strict equality, cloned obj has different memory address, so it is not equal
test("clone an object", () => {
  expect(script.cloneObj({ a: 1, b: 2 })).toBe({ a: 1, b: 2 });
});

// passed, toEqual can be used to compare objects(only compare key&value, do not consider memory address)
test("compare object with .toEqual", () => {
  var obj1 = { a: 1 };
  var obj2 = { a: 1 };
  expect(obj1).toEqual(obj2);
});

/** TRUTHINESS */

// jest provide truthiness matcher(null undefined defined truthy falsy)
test("test TRUTHNIESS", () => {
  var testNull = null;
  var testUndefined = undefined;
  var testDefined = "defined";
  var testTruthy = true;
  var testFalsy = false;
  expect(testNull).toBeNull();
  expect(testUndefined).toBeUndefined();
  expect(testDefined).toBeDefined();
  expect(testTruthy).toBeTruthy();
  expect(testFalsy).toBeFalsy();
});
