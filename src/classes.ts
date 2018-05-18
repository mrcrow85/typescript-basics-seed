class Pizza {
  private name: string;

  constructor(name: string, readonly sizes: string[]) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }
}

let pizza2 = new Pizza("Pepperoni", ["medium"]);

class Rectangle {
  x: number;
  constructor(x: number, protected y: number) {
    this.x = x;
  }
  get getX() {
    return this.x;
  }
}

class ColoredRectangle extends Rectangle {
  lineColor: string;
  constructor(lineColor: string, x: number, y: number) {
    super(x, y);
    this.lineColor = lineColor;
  }
  get getY() {
    return this.y;
  }
}

const coloredRectangle = new ColoredRectangle("Red", 2, 3);
console.log(coloredRectangle.lineColor);
console.log(coloredRectangle.getX);
console.log(coloredRectangle.getY);
