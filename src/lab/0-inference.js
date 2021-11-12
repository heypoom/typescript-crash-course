// @ts-check

/** On "Type Inference in JavaScript" */

/** @param {string} name */
function greet(name) {
  console.log(`Hello, ${name}!`)

  return true
}

greet("Poom")
greet(1024)

// TODO(4): What is the type of this function?
// How can we add the correct type here?
const add = (a, b) => a + b

console.log(add(10, 20))
