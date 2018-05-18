class Calc {
  static message = "hello";
  static sum(a: number, b: number) {
    return a + b;
  }
}
console.log(Calc.sum(2, 4));
console.log(Calc.message);
