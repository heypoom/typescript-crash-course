TypeScript: The Crash Course - Part 1

# Part 1: Gentle Intro

- What is a Crash Course?
- Format: 2 hours + 2 hours
- Objective for today
  - Learn basics of JS and TS
  - You should be able to read TS code in the wild.
- How to follow along (not a lecture)

  - "Exploratory"
  - GitHub: Materials
  - Repo for Project: https://github.com/heypoom/typescript-crash-course
  - Recommended: CodeSandbox
    - https://codesandbox.io/s/github/heypoom/typescript-crash-course
    - Please set this up first. You can play with it in parallel.
    - For advanced students: feel free to clone the repo and do your local setup (e.g. VSCode, Vim)
    - `yarn dev`

- Topic Introduction - What and Why JavaScript? - Prevalence - What you can build: - Websites (Vanilla, Svelte) - Webapps (React, Vue) - Mobile Apps (React Native) - Backend (Serverless, Express, Nest.js) - Micro-controllers (e.g. espruino) - Not always a good choice tho!

- Let's start by exploring! - Back to codesandbox - Click on first button (Sandbox Info) > Files > src/index.tsx - Click on Console - TODO(1) - console.log("Hello, World!") - Let's guess what this does. - index.tsx - Named imports from a Library - Default Imports from app - When in doubt, try hovering! - Wait, what's `(method) Document.getElementById(elementId: string): HTMLElement | null`? Keep that to yourself first.

  - app.tsx

- Why people hate JavaScript? - The Bad Parts - [denysdovhan/wtfjs: 🤪 A list of funny and tricky JavaScript examples (github.com)](https://github.com/denysdovhan/wtfjs) - BANaNa - `'b' + 'a' + + 'a' + 'a'` - What the fuck - Type Coercion - Weird behaviour?

# Part 2: The Basics

- Why TypeScript? - TypeScript is "JavaScript with Types"

- Why the "Type" System? - 3 Levels of usage - Reason 1: Type Coercion (no more WTFJS) - Prevent you from shooting yourself in the foot - Reason 2: The Real Reason - Variable Naming can Lie! - Prevent you from making mistakes in the team
  - Reason 3: The True Reason - Data modeling - Type Flowing - Save it for next time :)

---

- Type Inference in JS - Many code in the wild uses JavaScript, but you can make use of "JSDoc Comments" - Use // @ts-check - Type Comments - `const add: (a: any, b: any) => any`

- 3 Primitives + Variable types & Inference - Boolean - String - Number

- Functions: argument and return types - Function Definition - Arrow Function - Difference: `this` (Lexical Scoping) - EXERCISE

## Arrays and Objects

- Arrays vs Tuples - Array of number, string - Tuples: Birthday `[11, 07, 2001]` - `[number, number, number]` - `[day: number, month, number, year: number]`

- Objects - Inline object typing (with fixed keys and with any keys - Index Types and Index Signatures)

- Shaping the data model with Interface and Type + Optionals

- "Nothing" Types - Null -> เป็นคนกำหนดเองว่า ไม่มี - Undefined -> ไม่ได้ถูกกำหนดไว้

- Special Types: - Any - ช่างแม่มัน - Unknown - กูไม่รู้ บอกกูด้วย - Never - ก็เหี้ยแล้ว ไม่มีทาง - Void - ไม่มีโว้ย

- Type Casting: As and As Unknown

- Enums vs String Enums

- Union and Intersection Types, String Unions
- Type Narrowing and Widening
- Strict Mode: Why union undefined
- Generic Types
- Using Generics
- Common TS Helper Types (Generics) & How to read generics -- Record, Partial, Readonly, Omit, Pick, Exclude, etc.
- Readonly in Interface

Advanced Types: Tricks and Creating Helper Types (Bonus: might not be in time)

- Type Guards and Type Predicates Using if, in, typeof and predicate function to narrow down types
- Type Aliasing and Recursive Types: ITreeNode and ILinkedList
- Creating Your Own Custom Types
- Mapped Types
- Conditional Types
