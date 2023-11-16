/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(job_title,geographic_location,name,number_of_children){
  job_title=prompt("enter jop title")
  geographic_location=prompt("enter geographic location")
  name=prompt("enter name")
  number_of_children=parseInt(prompt("enter number of children"))
  return (`You will be a ${job_title} in ${geographic_location}, and married to ${name} with ${number_of_children} kids.`)
}
console.log(tellFortune());


// Arrow function
let tellFortune =()=>{
  job_title=prompt("enter jop title")
  geographic_location=prompt("enter geographic location")
  name=prompt("enter name")
  number_of_children=parseInt(prompt("enter number of children"))
  return (`You will be a ${job_title} in ${geographic_location}, and married to ${name} with ${number_of_children} kids.`)
}
console.log(tellFortune());




/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(age_human){
  age_human =parseInt(prompt("enter age :"))
  age_dog=7*age_human

  return `Your doggie is ${age_dog} years old in dog years!`
  
}
console.log(calculateDogAge())


// Arrow function
let calculateDogAge = ()=>{
  age_human =parseInt(prompt("enter age :"))
  age_dog=7*age_human

  return `Your doggie is ${age_dog} years old in dog years!`
  
}
console.log(calculateDogAge())







/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, amountPerDay) {
  let maxAge = 100;
  let amountPerYear = amountPerDay * 365;

  let yearsRemaining = maxAge - age;
  let amountNeeded = yearsRemaining * amountPerYear;

  let message = `You will need ${amountNeeded} to last you until the ripe old age of ${maxAge}.`;

  return message;
}

let age = parseInt(prompt("Enter your current age:"));
let amountPerDay = parseInt(prompt("Enter the amount you consume per day:"));

let message = calculateSupply(age, amountPerDay);
console.log(message);



// Arrow function
let calculateSupply=()=> {
  let age = parseInt(prompt("Enter your current age:"));
  let amountPerDay = parseInt(prompt("Enter the amount you consume per day:"));
  let maxAge = 100;
  let amountPerYear = amountPerDay * 365;

  let yearsRemaining = maxAge - age;
  let amountNeeded = yearsRemaining * amountPerYear;

  let message = `You will need ${amountNeeded} to last you until the ripe old age of ${maxAge}.`;

  return message;
}

console.log(calculateSupply());








/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function hello(name){
  name= prompt("enter your name:")
  return `hello ${name}`
}

console.log(hello())


// Arrow function
let hello=()=>{
  name= prompt("enter your name:")
  return `hello ${name}`
}

console.log(hello())




/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
There is an error in the function. It is trying to use a variable x in the calculation, but x has not been defined 
as an argument or a variable within the function. Instead, it should use the parameter cat that was passed to the function.


function double(7) {
  return 2 * 7;
}
The error in the code you provided is due to the way you're attempting to define 
a function. In JavaScript, when you define a function,you should use a variable name as the parameter, not a specific value like 7


function double('7') {
  return 2 * 'x';
}
The error in the code you provided is that you're trying to define a function with a string literal 
('7') as the parameter name. In JavaScript
*/





/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}


function double1(x) {
  return 2 * x;
}

/////////////////////////////////////////////////////
functiondouble2 x)
return 2 * x;
}

function double2(x) {
  return 2 * x;
}

///////////////////////////////////////////////////

function (x) double3 {
  return 2 * x;



const double3 = (x) => {
   return 2 * x;
};


*/





/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(x){
  x=parseInt(prompt("enter the value"))
  return `the size in cube = ${Math.pow(x,3)}`
}
console.log(cube())

//Arrow function
let cube=()=>{
  x=parseInt(prompt("enter the value"))
  return `the size in cube = ${Math.pow(x,3)}`
}
console.log(cube())


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(x,y){
  x=parseInt(prompt("enter the value"))
  y=parseInt(prompt("enter the value"))

  return `x*y = ${x*y}`
}
console.log(multiply())

//Arrow function
let multiply=()=>{
  x=parseInt(prompt("enter the value"))
  y=parseInt(prompt("enter the value"))

  return `x*y = ${x*y}`
}
console.log(multiply())




/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
  age=parseInt(prompt("enter your age"))
  if (age >=20){
    return "yes you can"
  }
  else if(age <20){
    return `please come back after ${20-age} years to get one`

  }


}
console.log(canIGetADrivingLicense())


//Arrow function
let canIGetADrivingLicense=()=>{
  age=parseInt(prompt("enter your age"))
  if (age >=20){
    return "yes you can"
  }
  else if(age <20){
    return `please come back after ${20-age} years to get one`

  }


}
console.log(canIGetADrivingLicense())







/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(a,b){
  a=(prompt("enter your a"))
  b=(prompt("enter your b"))

  if (a.length ==b.length){
    return true
  }
  else{
    return false

  }


}
console.log(sameLength())


//Arrow function
let sameLength=()=>{
  a=(prompt("enter your a"))
  b=(prompt("enter your b"))

  if (a.length ==b.length){
    return true
  }
  else{
    return false

  }


}
console.log(sameLength())





/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(a,b){
  a=parseInt(prompt("enter a"))
  b=parseInt(prompt("enter b"))

  if (a > b){
    return a
  }

  else if (b>a){
    return b
  }
  else{
    return "The two numbers are equal"

  }


}
console.log(largerNubmer())


//Arrow function
let largerNubmer =()=>{
  a=parseInt(prompt("enter a"))
  b=parseInt(prompt("enter b"))

  if (a > b){
    return a
  }

  else if (b>a){
    return b
  }
  else{
    return "The two numbers are equal"

  }


}
console.log(largerNubmer())






/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNumber(num1, num2, num3) {
  num1=parseInt(prompt("enter the number:"))
  num2=parseInt(prompt("enter the number:"))
  num3=parseInt(prompt("enter the number:"))

return Math.min(num1, num2, num3);
}

console.log(`The smallest number is: ${smallerNumber()}`);

//Arrow function
let smallerNumber=(num1, num2, num3)=> {
  num1=parseInt(prompt("enter the number:"))
  num2=parseInt(prompt("enter the number:"))
  num3=parseInt(prompt("enter the number:"))

return Math.min(num1, num2, num3);
}

console.log(`The smallest number is: ${smallerNumber()}`);

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString() {
  let strings = [];
  for (let i = 0; i < 5; i++) {
      let userInput = prompt(`Enter string ${i+1}:`);
      strings.push(userInput);
  }

  let shorter = strings[0];

  for (let i = 1; i < strings.length; i++) {
      if (strings[i].length < shorter.length) {
          shorter = strings[i];
      }
  }

  return shorter;
}

console.log(`The shorter string is: ${shorterString()}`);



//Arrow function
let shorterString =()=> {
  let strings = [];
  for (let i = 0; i < 5; i++) {
      let userInput = prompt(`Enter string ${i+1}:`);
      strings.push(userInput);
  }

  let shorter = strings[0];

  for (let i = 1; i < strings.length; i++) {
      if (strings[i].length < shorter.length) {
          shorter = strings[i];
      }
  }

  return shorter;
}

console.log(`The shorter string is: ${shorterString()}`);



/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString() {
  let strings = [];
  for (let i = 0; i < 5; i++) {
      let userInput = prompt(`Enter string ${i+1}:`);
      strings.push(userInput);
  }

  let shorter = strings[0];

  for (let i = 1; i < strings.length; i++) {
      if (strings[i].length > shorter.length) {
          shorter = strings[i];
      }
  }

  return shorter;
}

console.log(`The shorter string is: ${longerString()}`);


//Arrow function
let longerString =()=> {
  let strings = [];
  for (let i = 0; i < 5; i++) {
      let userInput = prompt(`Enter string ${i+1}:`);
      strings.push(userInput);
  }

  let shorter = strings[0];

  for (let i = 1; i < strings.length; i++) {
      if (strings[i].length > shorter.length) {
          shorter = strings[i];
      }
  }

  return shorter;
}

console.log(`The shorter string is: ${longerString()}`);




/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(num) {
  num=parseInt(prompt("enter the number:"))
  if(num%2==0){
    return true
  }
  else{
    return false
  }
}

console.log(isEven());




//Arrow function
let isEven=()=> {
  num=parseInt(prompt("enter the number:"))
  if(num%2==0){
    return true
  }
  else{
    return false
  }
}

console.log(isEven());

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(num) {
  num=parseInt(prompt("enter the number:"))
  if(num%2==0){
    return false
  }
  else{
    return true
  }
}

console.log(isOdd());


//Arrow function
let isOdd=()=> {
  num=parseInt(prompt("enter the number:"))
  if(num%2==0){
    return false
  }
  else{
    return true
  }
}

console.log(isOdd());


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num) {
  num=parseInt(prompt("enter the number:"))
  if(num>=0){
    return num
  }
  else if(num<0){
    return num *(-1)
  }
}

console.log(positive());

//Arrow function
let positive=()=> {
  num=parseInt(prompt("enter the number:"))
  if(num>=0){
    return num
  }
  else if(num<0){
    return num *(-1)
  }
}

console.log(positive());




/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName,lastName){
  firstName=(prompt("please enter first Name"));
  lastName=(prompt("please enter last Name"));
return `${firstName} ${lastName}`;
}
let  name1= fullName();
console.log(name1);
document.getElementById("main").innerHTML = name;


//Arrow function
let fullName =(firstName,lastName)=>{
  firstName=(prompt("please enter first Name"));
  lastName=(prompt("please enter last Name"));
return `${firstName} ${lastName}`;
}
let  name= fullName();
console.log(name);
document.getElementById("main").innerHTML = name;


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average() {
  let numbers =[];
  for(i=0;i<5;i++){
    let UserInput=parseInt(prompt(`enter number ${i+1}:`))
    numbers.push(UserInput)

  }
  let avg=numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return avg

}
console.log(average());



//Arrow function
let average=()=> {
  let numbers =[];
  for(i=0;i<5;i++){
    let UserInput=parseInt(prompt(`enter number ${i+1}:`))
    numbers.push(UserInput)

  }
  let avg=numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return avg

}
console.log(average());


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber() {
  return Math.random();
}

console.log(`The random number is: ${randomNumber()}`);


//Arrow function 
let randomNumber=()=> {
  return Math.random();
}

console.log(`The random number is: ${randomNumber()}`);



/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(min, max) {
  max=parseInt(prompt("enter the max value:"))
  min=parseInt(prompt("enter the min value:"))
  const range = max - min + 1;

  const randomNum = Math.floor(Math.random() * range);

  return randomNum + min;
}
console.log(randomBetweenNumbers())


//Arrow function
let randomBetweenNumbers =(min, max)=> {
  max=parseInt(prompt("enter the max value:"))
  min=parseInt(prompt("enter the min value:"))
  const range = max - min + 1;

  const randomNum = Math.floor(Math.random() * range);

  return randomNum + min;
}
console.log(randomBetweenNumbers())




/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty() {
  let mark = parseFloat(prompt("Enter the mark:"));

  if(mark<50){
      return "FAIL"
  }

  else if(mark >= 50 && mark <= 59){
    return "D"
  }

  else if(mark >= 60 && mark <= 69){
    return "C"
  }

  else if(mark >= 70 && mark <= 79){
    return "B"
  }

  else if(mark >= 80 && mark <= 89){
    return "A"
  }

  else if(mark >= 90 && mark <= 100){
    return "A+"
  }

}
console.log(scoreInUniversty())

//arrow function
let scoreInUniversty=()=> {
  let mark = parseFloat(prompt("Enter the mark:"));

  if(mark<50){
      return "FAIL"
  }

  else if(mark >= 50 && mark <= 59){
    return "D"
  }

  else if(mark >= 60 && mark <= 69){
    return "C"
  }

  else if(mark >= 70 && mark <= 79){
    return "B"
  }

  else if(mark >= 80 && mark <= 89){
    return "A"
  }

  else if(mark >= 90 && mark <= 100){
    return "A+"
  }

}
console.log(scoreInUniversty())



/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

function counter() {
  count=parseInt(prompt("enter the number:"))
  return count+1;
}
console.log(counter())


//arrow function 
let counter=()=> {
  count=parseInt(prompt("enter the number:"))
  return count+1;
}
console.log(counter())




/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function counter() {
  return count++;
}

function resetCounter() {
  const previousCount = count;
  count = 0;
  return `Counter reset. Previous count was ${previousCount}.`;
}
console.log(resetCounter())


//arrow function 
let counter =()=> {
  return count++;
}

let resetCounter =()=> {
  const previousCount = count;
  count = 0;
  return `Counter reset. Previous count was ${previousCount}.`;
}
console.log(resetCounter())
