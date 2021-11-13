enum Direction {
  Up,
  Down,
  Left,
  Right
}
console.log(Direction.Up)
console.log(Direction[0])

enum Direction1 {
  Up = 10, //后面依次递增
  Down,
  Left,
  Right
}