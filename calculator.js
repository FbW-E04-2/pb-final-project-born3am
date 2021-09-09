// include validator to accept only numbers

// include colors

const prompt = require(`prompt-sync`)({ sigint: true });

let welcome;
let menu;
let a;
let b;
let c;

welcome = prompt(`\n\n Welcome to RAINBOW CALCULATOR. \n\n\n\nPlease enter your name here:`);

menu = prompt(`\n Hello ${welcome}! What you wanna do with our calculator?

0 - Calculate Number PI
1 - Calculate Eulner's number
2 - Calculate Ratio (x,y, width)
3 - Calculate Percentage (x,y)
4 - calculate.add(x, y)
5 - calculate.subtract(x, y)
6 - calculate.multiply(x, y)
7 - calculate.divide(x, y)
8 - calculate.modulation(x, y)
9 - calculate.elevate(x, y)
10 - calculate.sqrt(x)

Choose a number above and press enter: `);

if (menu == 2) {
  console.log(`\n This function calculates the "height" considering a given "width" an a given ratio "x (width) : y (height)". Choose next your variables: 
    
    `);
} else if (menu == 3) {
  console.log(`\n This function calculates the percentage of "x" in "y". Choose next your variables: 
    
    `);
}

else if (menu == 4) {
  console.log(`\n This function calculates the simply sum of "x" + "y". Choose next your variables: 
    
    `);
}

else if (menu == 5) {
  console.log(`\n This function calculates the simply subtraction of "x" - "y". Choose next your variables: 
    
    `);
}

else if (menu == 6) {
  console.log(`\n This function calculates the multiplication "x" * "y". Choose next your variables: 
    
    `);
}

else if (menu == 7) {
  console.log(`\n This function calculates the division of "x" / "y". Choose next your variables: 
    
    `);
}

else if (menu == 8) {
  console.log(`\n This function returns the remainder of "x" divided by "y". Choose next your variables: 
    
    `);
}

else if (menu == 9) {
  console.log(`\n This function returns the power of "x" elevated to "y". Choose next your variables: 
    
    `);
}

else if (menu == 10) {
  console.log(`\n This function returns the square root of "x". Choose next your variables: 
    
    `);
}

if (
  menu == 2 ||
  menu == 3 ||
  menu == 4 ||
  menu == 5 ||
  menu == 6 ||
  menu == 7 ||
  menu == 8 ||
  menu == 9 ||
  menu == 10
) {
  a = prompt(`Choose a NUMBER to be your "x" variable: `);

  // while (Number.isNaN(a)) {
  //   a = prompt(`Choose a NUMBER to be your "x" variable: `);
  // }

  if (menu != 10) {
    b = prompt(`Choose a NUMBER to be your "y" variable: `);
  }

  if (menu == 2) {
    c = prompt(`Choose a number to be your "width" variable: `);
  }

  pause = prompt(`\n Press any key to get your result! \n\n`);
}
class Calculator {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.pi = 3.141592653589793;
    this.e = 2.718281828459045;
  }

  ratio() {
    let ratio = Math.abs(this.y) / Math.abs(this.x);
    return ratio * this.width;
  }

  percentage() {
    return `${(this.x / this.y) * 100}%`;
  }

  add() {
    return this.x + this.y;
  }

  subtract() {
    return this.y - this.x;
  }

  multiply() {
    return this.x * this.y;
  }

  divide() {
    if (this.y == 0) {
      return `ERROR: the divisor cannot be 0`;
    } else {
      return this.x / this.y;
    }
  }

  modulation() {
    if (this.y == 0) {
      return `ERROR: the divisor cannot be 0`;
    } else {
      return this.x % this.y;
    }
  }

  elevate() {
    return Math.pow(this.y, this.x);
  }

  sqrt() {
    return Math.sqrt(this.x);
  }
}

const calculate = new Calculator(a, b, c);

// Returns PI (3.141592653589793)
if (menu == 0) {
  console.log(`PI = ${calculate.pi}\n`);
}

// Returns Eulner's number (2.718281828459045)
if (menu == 1) {
  console.log(`Eulner's number = ${calculate.e}\n`);
}

//return height is --- on ratio x:y
if (menu == 2) {
  console.log(`Heigh = ${calculate.ratio()}\n`);
}

// return percentage of x in y.
if (menu == 3) {
  console.log(calculate.percentage());
}

// Returns the sum of x added to y.
if (menu == 4) {
  console.log(calculate.add());
}

// Returns the differente of y subtracted to x.
if (menu == 5) {
  console.log(calculate.subtract());
}

// Returns the product of x multiplied by y.
if (menu == 6) {
  console.log(calculate.multiply());
}

// Returns the quotient of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.
if (menu == 7) {
  console.log(calculate.divide());
}

// Returns the remainder of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.
if (menu == 8) {
  console.log(calculate.modulation());
}

// Returns the power of x elevated to y.
if (menu == 9) {
  console.log(calculate.elevate());
}

// Returns the square root of x.
if (menu == 10) {
  console.log(calculate.sqrt());
}
