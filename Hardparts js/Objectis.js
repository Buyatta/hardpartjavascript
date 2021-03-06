// TODO: define polyfill for `Object.is(..)`
if (!Object.is || true) {
  Object.is = function objectIs(x, y) {
    var xNegZero = isitNegZero(x);
    var yNegZero = isitNegZero(y);
    //to check if x or y is negative zero
	  if (xNegZero || yNegZero) {
	return	xNegZero && yNegZero
    } else if (isitNaN(x) && isitNaN(y)) {
      return true;
    } else {
     return x === y;
    }

    //define a helper to help if Negative zero is zero
    function isitNegZero(v) {
      return v === 0 && 1 / v === -Infinity;
    }
    //checkif both are NaN
    function isitNaN(v) {
      return v !== v;
    }
  };
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);

/* # Polyfill for `Object.is(..)`

In this exercise, you will define a polyfill for `Object.is(..)`. No cheating and looking it up online!

## Instructions

1. `Object.is(..)` should take two parameters.

2. It should return `true` if the passed in parameters are exactly the same value (not just `===` -- see below!), or `false` otherwise.

3. For `NaN` testing, you can use `Number.isNaN(..)`, but first see if you can find a way to test without usage of any utility?

4. For `-0` testing, no built-in utility exists, but here's a hint: `-Infinity`.

5. If the parameters are any other values, just test them for strict equality.

6. You cannot use the built-in `Object.is(..)` -- that's cheating!

## Polyfill Pattern

**NOTE:** Since your JS environment probably already has `Object.is(..)`, to test your polyfill you'll have to first unconditionally define it (no `if` guard), and then add the `if` guard when you're done.

To define a polyfill, it looks like this:

```js
if (!Object.is) {
	Object.is = function ObjectIs(..) { .. };
}
```*/
