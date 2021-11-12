// DEMO: Union Types

function getDirectionName(direction: "up" | "down" | "left") {}

// getDirectionName('leftz')

type Angle = 0 | 90 | 180 | 270 | 360

function sinOf(angle: Angle) {
  // if (angle === 50) {}
  if (angle === 90) {
  }
}

sinOf(180)

type A = "person" | 50
const getA = (a: A) => a
getA("person")
getA(50)
// getA(60)

// DEMO: Intersection Types
// Draw a venn diagram!

type Person2 = { name: string }
type Employee = { salary: number }

type Person3 = Person2 & Employee
const person4: Person3 = { name: "", salary: 0 }

type ThisWillBeNever = string & number

// Think of venn diagram
type AAA = number & 10

// DEMO: Union from Constant Array
const values = [1024, 2048, 4096] as const
type ValueUnion = typeof values[number]

// DEMO: String Unions.

// DEMO: Discriminated Unions (e.g. check by types)

type Action =
  | { type: "setUser"; payload: string }
  | { type: "getUser"; payload: undefined; error: Error }

function userReducer(action: Action) {
	switch (action.type) {
		case "setUser":
			return action.payload
		case "getUser":
			return action.error
	}
}

// DEMO: Reducers

// LAB - TBD.
