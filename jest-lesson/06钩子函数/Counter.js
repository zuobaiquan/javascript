export default class Counter {
  constructor() {
    this.number = 0;
  }
  addOne() {
    this.number += 1;
  }
  addTwo() {
    this.number += 2;
  }
  minusOne() {
    this.number -= 1;
  }
  minusTwo() {
    this.number -= 2;
  }
}