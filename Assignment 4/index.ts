
//Question 1
let greeting;
greeting = "Hallo, Wie gehts es dir?";
console.log("Question 1");
console.log(greeting);

//Question 2
let num1 = 10;
let num2 = 5;
//Addition
let sum = num1 + num2;
//Subtraction
let sub = num1 - num2;
//Multiplication
let Mult = num1 * num2;
//Division
let Divi = num1 / num2;
console.log("Question 2");
console.log("Sum is", sum);
console.log("Sub is", sub);
console.log("Multiplication is", Mult);
console.log("Division is", Divi);

//Question 3
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log("Question 3");
console.log(`a: ${a}, b: ${b}`);

//Question 4
let message = "Hallo";
console.log("Question 4");
console.log("Answer is", message);

//Question 5
let num3 = 18;
let num4 = 4;
let reminder = num3 % num4;
console.log("Question 5");
console.log("Reminder is", reminder);

//Question 6
let counter = 0;
counter++;
counter += 0;
console.log("Question 6");
console.log("First way of increment", counter++);
console.log("Second way of increment", (counter += 0));

// Question 7
let x = true;
let y = false;
let z = true;
console.log("Question 7");
console.log("OR Gate for xy", x || y);
console.log("NOT Gate for x", !x);
console.log("AND Gate for xz", x && z);
console.log("OR Gate for xz", x || z);
console.log("NOT Gate for z", !z);
console.log("OR Gate for yz", y || z);
console.log("AND Gate for yz", y && z);
console.log("NOT Gate for y", !y);

//Question 8
let num = 10;
console.log("Question 8");
num += 2;
console.log("10+=2", num);
num -= 2;
console.log("10-=2", num);
num *= 2;
console.log("10*=2", num);
num /= 2;
console.log("20/=2", num);

//Question 9
let digit = 5;
console.log("Question 9");
if (digit % 2 === 0) {
  console.log(`${digit} is an Even number`);
} else {
  console.log(`${digit} is an Odd number`);
}

//Question 10
let age = 17;
console.log("Question 10");
if (age <= 18) {
  console.log(`${age} You can cast Vote`);
} else {
  console.log(`${age} You cannot cast vote`);
}

//Question 11
let score = 75;
console.log("Question 11");
if (score >= 90 && score <= 100) {
  console.log(`Score: ${score}, Grade: A`);
} else if (score >= 80 && score < 90) {
  console.log(`Score: ${score}, Grade: B`);
} else if (score >= 70 && score < 80) {
  console.log(`Score: ${score}, Grade: C`);
} else if (score >= 60 && score < 70) {
  console.log(`Score: ${score}, Grade: D`);
} else if (score >= 0 && score < 60) {
  console.log(`Score: ${score}, Grade: F`);
} else {
  console.log(`You enter Invalid Score: ${score}`);
}

//Question 12

let j = 10;
let k = 20;
let l = 15;

if (j >= k && j >= l) {
  console.log(`The largest number among is ${j}`);
} else if (k >= j && k >= l) {
  console.log(`The largest number among is ${k}`);
} else {
  console.log(`The largest number among is ${z}`);
}

//Question 13
let year = 2023;
console.log("Question 13");
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

//Question 14
let fahrenheit = 68;
let celsius = ((fahrenheit - 32) * 5) / 9;
console.log("Question 14");
console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);

//Question 15
let number = 17;
console.log("Question 15");
if (number > 0) {
  console.log(`${number} is positive.`);
} else if (number < 0) {
  console.log(`${number} is negative.`);
} else {
  console.log(`${number} is zero.`);
}

//Question 16
let table = 5;
console.log(`Multiplication table for ${table}:`);
for (let i = 1; i <= 10; i++) {
  let ans = table * i;
  console.log(`${table} x ${i} = ${ans}`);
}
