/** 3 - Arrays and Tuples */

// DEMO: Arrs ay Type Inference
const fruits: string[] = ["orange", "apple"]

// DEMO: Array (containing single =types)

// DEMO: Tuples (single type tuple, mixed type tuple)
const birthday: [number, number, number, string] = [7, 11, 2001, "hello"]

// DEMO: Labeled Tuple (e.g. birthday, fruits)
function printBirthday(birthday: [day: number, month: number, year: number]) {

}

printBirthday([7, 11, 2001])

// DEMO: Array.prototype.map
const numbers = [1, 2, 3, 4, 5]
numbers.map(n => n * 5) // [5, 10, 15, 20, 25]
numbers.map(n => `Queue #${n}`) // ["Queue #1", "Queue #2", "Queue #3", "Queue #4", "Queue #5"]

// DEMO: Array.prototype.filter
numbers.filter(n => n <= 3) // [1, 2, 3]

// DEMO: Array.prototype.reduce
numbers.reduce((acc, n) => acc + n, 0) //?

// 0 + 1 = 1 
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

/**
 * TODO(6) - Please create these.
 */

// 6.1) Create an array of your favourite shows
// (Movie, Anime, Series, Cartoon, Manga, Documentary, whatever...)

// 6.2) Create a function to count how many favourite shows
// you have.

// 6.3) Create a typed tuple containing a user's information:
// name, age, phone number, email, is single
// Note: Please use a fake info to protect your privacy.

// 6.4) Create a function that accepts a labeled tuple of birthday,
// and get a rough estimate of how many days they have been alive for.

// Hint: (y * 365) + (m * 30) + d
// Hint 2: const date = new Date()

// getDaysAlive([11, 07, 2001]) -> roughly 7,605 days.

// 6.3) Observe: What will be the type of an untyped mixed array?
// Hint: We will talk more about the `|` soon :)
