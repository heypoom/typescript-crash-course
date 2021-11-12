// DEMO: the keyof keyword
interface PersonCC {
  name: string
  age: number
  isLegal: boolean
}

// String Union
// 'name' | 'age' | 'isLegal'
type KeyOfPerson = keyof PersonCC

const personCC: PersonCC = {
  name: "",
  age: 0,
  isLegal: false
}

// Generic function.
function getPersonByKey<T extends keyof PersonCC>(key: T): PersonCC[T] {
  return personCC[key]
}

getPersonByKey("name") // string
getPersonByKey("age") // number
getPersonByKey("isLegal") // boolean
// getPersonByKey('aaa')

// DEMO: Index interface by key
function getPersonByKey2(
  name: PersonCC["name"],
  age: PersonCC["age"],
  isLegal: boolean
) {}

// DEMO: The `in` keyword
type StatusMapStupid = {
  active: boolean
  pending: boolean
  check: boolean
}

type Status = "active" | "pending" | "check"

// Iterate through the `Status` union
// Type Flowing
type StatusMap = { [P in Status]: boolean }

type Eventz = "create" | "update" | "delete"

// interface EventMap {
// 	onCreate: string
// 	onUpdate: string
// }

// Type is always checked on compile time
type Eventz2 = `on${Uppercase<Eventz>}`

// `on${Eventz}`
type EventMap = { [E in Eventz]: string }

type AngleMap = {
  [Angle in 90 | 180 | 270]: string
}

// DEMO: The readonly keyword
// DEMO: Recursive Types
interface TNode {
  child: TNode | null
}

const node: TNode = {
  child: {
    child: null
  }
}

// DEMO: What is generics

interface ListNode<T> {
  value: T
}

const ln1: ListNode<number> = { value: 10 }
const ln2: ListNode<boolean> = { value: true }

function print<T>(a: ListNode<T>) {
  const value = a.value

  if (typeof value === "string") {
    value
  }
}

print({ value: 10 })
print({ value: "string" })

// DEMO: Generics in Functions

// DEMO: Generic Constraints
function add<T extends number>(a: T, b: T) {
  return a + b
}

// DEMO: Built-in Utility Types

// DEMO: How to read and understand generics
// Tip: Use CTRL+CLICK!

type AsEventKey<T extends string> = `on_${T}`
type OnChange = AsEventKey<"change">
type OnUpdate = AsEventKey<"update">

type IntoPerson<T extends string> = {
  name: T

  // Literal
  age: 50
}

const intoPerson: IntoPerson<"poom"> = {
  name: "poom",
  age: 50
}

/**
 * Construct a type with a set of properties K of type T
 */
// Mapped Types
type RecordCustom<K extends keyof any, T> = {
  [P in K]: T
}

const permissions: Record<"create" | "update", boolean> = {
  create: true,
  update: false
}

// DEMO: Record
const scores20: RecordCustom<string, number> = {
  a: 10,
  b: 20,
  c: 30
}

// DEMO: Partial

interface ContactInfo {
  name: string
  phone: string
  age: number
}

type PartialCustom<T> = {
  [P in keyof T]: T[P]
}

type PartialContactInfo = PartialCustom<ContactInfo>

// DEMO: Readonly

type ReadonlyContactInfo = Readonly<ContactInfo>

// DEMO: Omit
type OmitContactInfo = Omit<ContactInfo, "name" | "phone">
type PickContactInfo = Pick<ContactInfo, "name" | "phone">

// We specify the keys that we want to get
// type ContactInfoPicked = {
//     [P in 'name' | 'phone']: ContactInfo[P]
// };

type CustomOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

type ExcludeCustom<T, U> = T extends U ? never : T

type ExcludeU = ExcludeCustom<1 | 2 | 3, 3 | 2>

type IsNumber<T> = T extends number ? "Yes" : "No"
type Is5Number = IsNumber<5>
type IsHelloNumber = IsNumber<"hello">

type Greet<T> = T extends "hello" | "hayo" ? "hai" : "nope"
type GreetHello = Greet<"hello">
type GreetHayo = Greet<"hayo">
type GreetAAA = Greet<"aaa">

// DEMO: Pick
// DEMO: Exclude
