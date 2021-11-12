// DEMO: Union Types

type Angle = 0 | 90 | 180 | 270 | 360

// DEMO: Intersection Types

type ThisWillBeNever = string & number

// DEMO: Union from Constant Array
const values = [1024, 2048] as const
type ValueUnion = typeof values[number]

// DEMO: String Unions.

// DEMO: Discriminated Unions (e.g. check by types)

type Action =
  | { type: "setUser"; payload: string }
  | { type: "getUser"; payload: undefined; error: Error }

// DEMO: Reducers

// LAB - TBD.
