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

/** NUMBER */

// numbers comparing matchers( > >= < <= == === ≈)
test("test Number", () => {
  var testNumber = 5;
  var testFloat = 0.1 + 0.2;
  expect(testNumber).toBeGreaterThan(4);
  expect(testNumber).toBeLessThan(6);
  expect(testNumber).toBeGreaterThanOrEqual(5);
  expect(testNumber).toBeLessThanOrEqual(5);
  expect(testNumber).toEqual(5);
  expect(testNumber).toBe(5); // strict equality

  // since 0.1 + 0.2 is not equal to 0.3 in js, in some case when comparing floating numbers, we use .toBeCloseTo to avoid rounding error
  expect(testFloat).toBeCloseTo(0.3);
});

/** String */

// jest string comparing use regexp
test('test STRING', ()=>{
    var testString = 'JestOutlook'
    expect(testString).toMatch(/J/) // regexp indicated that jest will judge if testString contains J
    expect(testString).toMatch(/look/)
})