// Null - I know it's missing!
// Undefined - It's not defined.

// DEMO: Difference between null and undefined.
// Falsey and Truthy

// Any - Screw It, don't type check anything. (ช่างแม่มัน)
// Disable type checking
const hello: any = 5
hello.kawgokawofk.awgamnwgioawkfopdkawopgwafaw()

// Unknown - IDK, You Tell Me (กูไม่รู้ บอกกูด้วย)
function add(a: unknown, b: unknown) {
	if (typeof a === 'string' && typeof b === 'string') {
		return a + b
	}
}

// Never - NEVER! (ก็เหี้ยแล้ว ไม่มีทาง)
// It will never return
function unimplemented(): never {
	throw new Error('unimplemented')
}

// type A = string & number

// Void - ไม่มีโว้ย
// It cannot have a return value (unless it's undefined)
function add(): void {
	// return 100
	// return
	// return undefined
}

// DEMO: Difference between any, unknown, never and void.

// DEMO: How to use these types IRL?
