// DEMO: Enums
enum Color {
  Red,
  Green,
  Blue
}

function useColor(color: Color): string {
  switch (color) {
    case Color.Red:
      return "hello"
    default:
      return "world"
  }
}

useColor(Color.Red)
useColor(Color.Green)
useColor(Color.Blue)

Color //?

// DEMO: String Enums
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

Direction //?
Direction.Up //?

// Functions operation on enum
function useDirection(direction: Direction) {}

// useDirection("UP")
useDirection(Direction.Up)
// useDirection(.Up)
