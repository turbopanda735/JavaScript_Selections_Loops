console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let index = 1; index < 101; index++) {
  if (index % 2 != 0) {
    console.log(`${index} is odd`);
  } else {
    console.log(`${index} is even`);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let index = 0; index < 101; index++) {
  if (index % 3 == 0 && index % 5 == 0) {
    console.log(`${index} fizzbuzz`);
  } else if (index % 3 == 0) {
    console.log(`${index} fizz`);
  } else if (index % 5 == 0) console.log(`${index} buzz`);
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

console.log("whileLoop even or odd");
let whileLoop = true;
let x = 1;
while (whileLoop) {
  if (x % 2 != 0) {
    console.log(`${x} is odd`);
  } else {
    console.log(`${x} is even`);
  }
  x++;
  if (x == 101) {
    whileLoop = false;
  }
}

console.log("dowhileLoop even or odd");
let dowhileLoop = true;
let y = 1;
do {
  if (y % 2 != 0) {
    console.log(`${y} is odd`);
  } else {
    console.log(`${y} is even`);
  }
  y++;
  if (y == 101) {
    dowhileLoop = false;
  }
} while (dowhileLoop);

console.log("whileLoop fizzbuzz");
let whileLoop2 = true;
let z = 1;
while (whileLoop2) {
  if (z % 3 == 0 && z % 5 == 0) {
    console.log(`${z} fizzbuzz`);
  } else if (z % 3 == 0) {
    console.log(`${z} fizz`);
  } else if (z % 5 == 0) {
    console.log(`${z} buzz`);
  }
  z++;
  if (z == 101) {
    whileLoop2 = false;
  }
}

console.log("dowhileLoop fizzbuzz");
let dowhileLoop2 = true;
let a = 1;
do {
  if (a % 3 == 0 && a % 5 == 0) {
    console.log(`${a} fizzbuzz`);
  } else if (a % 3 == 0) {
    console.log(`${a} fizz`);
  } else if (a % 5 == 0) {
    console.log(`${a} buzz`);
  }
  a++;
  if (a == 101) {
    dowhileLoop2 = false;
  }
} while (dowhileLoop2);

console.log("EXERCISE 4:\n==========\n");
let value = Math.round(Math.random() * 500);
// creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100);
// creates a random number between 100 and 500

let found = false;
console.log(n);
console.log(value);
for (let index = 0; index <= n; index++) {
  if (index == value) {
    console.log(`Found value! ${index}`);
    found = true;
  }
}
if (!found) {
  console.log(`${value} was not found :(`);
}

console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let limit = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(`${start} = start`)
console.log(`${limit} = limit`)
console.log(`${fizzDivisor} = fizzDivisor`)
console.log(`${buzzDivisor} = buzzDivisor`)
for (start; start <= limit; start++) {
  if (start % fizzDivisor == 0 && start % buzzDivisor == 0) {
    console.log(`${start} fizzbuzz`);
  } else if (start % fizzDivisor == 0) {
    console.log(`${start} fizz`);
  } else if (start % buzzDivisor == 0) {
    console.log(`${start} buzz`);
  }
}
