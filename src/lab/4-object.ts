/** Objects */

// DEMO: Object Type Inference

// DEMO: Inline Object Typing

// DEMO: Using the Record utility type. More on this later.

// DEMO: Index Types, Index Signatures

// DEMO: Shaping the Data Model

// DEMO: "Interface" vs "Types"

// DEMO: Optional Fields

// DEMO: Optional Chaining

/**
 * TODO(7)
 *
 * Please type these objects and functions.
 */

// Please create a `Person` interface type.
// HINT: You can use recursive types here!
const person = {
  firstName: "Thaksin",
  lastName: "Shinawatra",
  age: 72,
  country: "Dubai",
  marriedTo: {
    firstName: "Yingluck",
    lastName: "Shinawatra",
    age: 54,
    country: "Dubai"
  }
}

// Please create a function that checks if
// their husband have changed their last name.

// hasSameSurname(person)

// Please create a `Hackathon` interface type.
const hackathon = {
  name: "Startup Thailand",
  attendees: [
    { name: "John Wick", email: "dont.kill.my.dog@gmail.com" },
    { name: "John Cena", email: "@gmail.com" }
  ]
}

// Please type this function.
const getAttendeesCount = (hackathon) => hackathon.attendees.count
getAttendeesCount(hackathon)

// Please type this function.
const getTotalScores = (scores) => Object.values(scores).reduce((a, b) => a + b)
getTotalScores({ mary: 20, june: 40, sue: 60 })

/**
 * TODO(8)
 *
 * Please create a type/interface and function that matches these requirements.
 * Feel free to use your imagination.
 */

// 8.1) A file system can contain folders and files.
// Each folder can have multiple folders and files.

// 8.2) Write a function to count the total number of files
// and folders in that file system.

// const fileStats = (root: Folder) => ...
