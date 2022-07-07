//test node and nodemon
// console.log("This works!");
// console.log("111");

//working with variables
// let name = "John",
//   admin = name;
// console.log(admin);

//giving the right names
// let OUR_PLANET;
// let currentVisitor;

//uppercase const
// not right for both birthday and age

//string quotes
// let name = "Ilya";
// console.log(`hello ${1}`);
// console.log(`hello ${"name"}`);
// console.log(`hello ${name}`);

//can I add a string property?
// let str = "Hello";
// str.test = 5;
// console.log(str.test);

//uppercase for the first character
// function ucFirst(name) {
//     return name[0].toUpperCase() + name.substr(1, name.length - 1);
//   }
//   console.log(ucFirst("john"));

//check for spam
// function checkSpam(str) {
//   str = str.toLowerCase();
//   if (str.includes("viagra") || str.includes("xxx")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkSpam("buy ViAgRA now"));
// console.log(checkSpam("free xxxxx"));
// console.log(checkSpam("innocent rabbit"));

//truncate the text
// function truncate(str, maxlength) {
//   if (str.length <= maxlength) {
//     return str;
//   } else {
//     let str1 = str.slice(0, maxlength - 1) + "...";
//     return str1;
//   }
// }
// console.log(truncate("What I'd like to tell on this topic is:", 20));
// console.log(truncate("Hi everyone!", 20));

//extract the money
// function extractCurrencyValue(str) {
//   return str.slice(1);
// }
// console.log(extractCurrencyValue("$120"));

//sum numbers from the visitor
// let num1 = +prompt("please enter number 1:");
// let num2 = +prompt("please enter number 2:");
// alert(`The sum of number 1 and number 2 is ${num1 + num2}`);

//why 6.35.toFixed(1)==6.3?
// console.log(Math.round(1.35 * 10) / 10);
// console.log(Math.round(6.35 * 10) / 10);

//repeat until the input is a number
// function readNumber() {
//   let num;

//   do {
//     num = prompt("Enter a number please?", 0);
//   } while (!isFinite(num));

//   if (num === null || num === "") return null;

//   return +num;
// }
// console.log(`Read: ${readNumber()}`);

//an occasional infinite loop
// console.log((0.2).toFixed(20)); //0.20000000000000001110 precision loss
// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
// let i = 0;
// while (i < 10.2) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) console.log(i);
// }

//a random number from min to max
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }
// console.log(random(1, 5));
// console.log(random(1, 5));
// console.log(random(1, 5));

//a radom integer from min to max
// function randomInteger(min, max) {
//   // now rand is from  (min-0.5) to (max+0.5)
//   let rand = min - 0.5 + Math.random() * (max - min + 1);
//   return Math.round(rand);
// }
// console.log(randomInteger(1, 3));

//the postfix and prefix forms
// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1

//assignment result
// let a = 2;
// let x = 1 + (a *= 2); // a=4, x=5

//type conversions
// "" + 1 + 0 // 10
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // 9px
// "$" + 4 + 5 // $45
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 // " -9 5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2

//fix the addition
// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);
// console.log(a + b);

//last loop value
// let i = 3;
// while (i) {
//   alert( i-- );
// } // 1

//which values does the while loop show?
// let i = 0;
// while (++i < 5) alert( i ); // 1, 2, 3, 4

// let i = 0;
// while (i++ < 5) alert( i ); // 1, 2, 3, 4, 5

//which values get shown by the for loop?
// for (let i = 0; i < 5; i++) alert( i ); // from 0 to 4
// for (let i = 0; i < 5; ++i) alert( i );

//output even numbers in the loop
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) console.log(i);
// }

//replace "for" with "while"
// let i = 0;
// while (i < 3) {
//   console.log(`number${i}!`);
//   i++;
// }

//repeat until the input is correct
// let num;
// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

//output prime numbers
let n = 10;
nextPrime: for (i = 2; i <= n; i++) {
  for (j = 2; j < i; j++) {
    if (i % j === 0) {
      continue nextPrime;
    }
  }
  console.log(i);
}
