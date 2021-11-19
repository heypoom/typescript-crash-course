/** Objects */

// DEMO: Object Type Inference
const person2 = {
	name: 'John',
	age: 30,
	hobbies: ['Sports', 'Cooking'],
	role: 'admin',
	isAdmin: true,
}

// interface Person {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: string;
// 	isAdmin: boolean;
// }

// Type can do more things, e.g. index types, union, intersection
type Person = {
	name: string;
	age: number;
	hobbies: string[];
	role: string;
	isAdmin: boolean;
}

function describePerson(person: Person) {
	console.log(`${person.name} is ${person.age} years old.`)
}

describePerson(person2)

// DEMO: Inline Object Typing
const person3: { name: string, age: number} = {
	name: 'John',
	age: 30,
}


// DEMO: Index Types, Index Signatures
const scores: { [key: string]: number } = {
	john: 10,
	jane: 20,
	mary: 30,
	prayuth: 40,
	prawit: 50
}

// DEMO: Using the Record utility type. More on this later.
const scores2: Record<string, number> = {
	john: 10,
	jane: 20,
	mary: 30,
	prayuth: 40,
	prawit: 50
}

// DEMO: Shaping the Data Model
interface Attendee {
	person: Person
}

interface TreeNode {
	value: number
	left?: TreeNode
	right?: TreeNode
}

// DEMO: "Interface" vs "Types"

// DEMO: Optional Fields

const xxx = {
	attendees: null
}

const a = undefined
const b = null

function sayHi(options: {name: string, age?: number}) {

}

sayHi({name: 'John', age: undefined})
sayHi({name: 'John', age: 50})

// DEMO: Optional Chaining

const person = {
	husband: {
		contact: {
			phone: '1234567890'
		}
	}
}

if (person?.husband?.contact?.phone) {
	console.log(person.husband.contact.phone)
}

}

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
