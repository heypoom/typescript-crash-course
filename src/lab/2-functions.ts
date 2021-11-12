/** 2 - Functions: Argument and Return Types */

// Keywords to read: Arrow Functions, Lexical Scoping

// DEMO: Add, Subtract
function add(a: number, b: number) {
  return a + b
}

const sub = (a: number, b: number) => a - b

// DEMO: Calling other functions
const add3 = (n: number) => add(n, 3)

const addCurry = (n: number) => (m: number) => m + n
const add4 = addCurry(4)

console.log(add4(5))

/**
 * TODO(5)
 *
 * Please write a function with the proper
 * argument type and return types.
 **/

// 5.1 - Print your name (console.log)

// 5.2 - Write a function to inverse the boolean.
// Tip !true === false

// 5.3 - Write a function for Pythagorean's theorem
// Tip: You can use Math.sqrt, Math.pow

// 5.4 - Modify App.tsx and display the Pythagorean result there.
// Tip: Use the braces, e.g. {yourFunc(a, b)} to show the value.

// Test Cases:
// printName("YourName")
// console.log(pythagorean(4, 3))

/**
 * TODO(6)
 *
 * These functions are untyped.
 * Can you type it?
 */

// 6 - Please type this "say" function.
const say = (name, times) => name.repeat(times)

// 7 - Please type this "divide" function.
const divide = (a, b) => a / b
