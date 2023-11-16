// console.log('Here is : ', 'array')






////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Each question has a solution below it


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*
1
Correct the syntax error
 [ 1,7  9  45, ]
 [ 1,7 , 9 , 45]
------------------------------
 ["Str" "alex","moh"
["Str" ,"alex","moh"]
-------------------------------
 'the','fox' 'over' lazy, 'dog',  ]
['the','fox','over' ,lazy, ,'dog']
*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

Banana=1
Tomato=0

*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)

let Favorite_Food =["meat","chicken","shawarma","eggs","pastries"]
let Favorite_Sport=["Football","tennis","basketball"]
*/


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/



// function firstOfArray(array){
//     array =[1,4,5]
//     if (array.length>0){
//         return array[0]
//     }
// }
// console.log(firstOfArray())



/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/


// function lastOfArray(array){
//     array =[1,4,5]
//     if (array.length>0){
//         return array[array.length -1]
//     }
// }
// console.log(lastOfArray())


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/


// let array =[0,5,7,9]
// array.push(10)
// array.shift()
// array.shift()
// array.shift()
// array.unshift(1,2,4,6,8)
// console.log(array)




/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]

pop=>remove 3.5
push=> add element in last array
shift=> remove 5
unshift=> add element in first array 
*/


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/


// function middleOfArray(arr) {
//     let length = arr.length;
//     if (length % 2 === 1) {
//         return arr[Math.floor(length / 2)];
//     } 
//     else {
//         return [arr[length / 2 - 1], arr[length / 2]];
//     }
// }

// let oddArray = [1, 2, 6, 4, 5];
// let evenArray = [1, 2, 3, 4];

// let resultOdd = middleOfArray(oddArray);
// let resultEven = middleOfArray(evenArray);

// console.log(resultOdd);
// console.log(resultEven);  



/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/


// var animals = ['cat', 'ele', 'bird'];
// animals = ['zebra', 'elephant'];



/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/


// function indexOfArray(num,index){
   
//     return num[index]
// }
// let arr =[1,2,3,4,5]
// console.log(indexOfArray(arr,3))



/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/


// function arrayExceptLast(arr){
//          return arr
// }
// let num =[1,2,3,4,5]
// num.pop()
// console.log(arrayExceptLast(num))


/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/



// function addToEnd(arr,num){
//     return arr
// }
// let array =[1,2,3,4,5]
// array.pop()

// console.log(addToEnd(array,array.push(6)))



// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function sumArray(arr){
//     let sum=0
//     for(i=0;i<arr.length;i++){
//         sum += arr[i]
       

//     }
//     return sum
// }
// array = [1,2,3,4,5]
// console.log(sumArray(array))
// --------------------------------------------------------------------
// function sumArray(arr){
//     let sum = 0;
//     let i = 0;

//     while (i < arr.length) {
//         sum += arr[i];
//         i++;
//     }

//     return sum;
// }

// let array = [1, 2, 3, 4, 5];
// console.log(sumArray(array));






/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function minInArray(arr){
//     let min =arr[0]
//     for(i=0;i<arr.length;i++){
//         if( min > arr[i]){
//             min=arr[i]
//         }
//     }
//     return min
// }
// array=[100,2,3,4,5]
// console.log(minInArray(array))



/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



// function removeFromArray(arr, elementToRemove) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== elementToRemove) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// let myArray = [1, 2, 3, 4, 2, 5];
// let newArray = removeFromArray(myArray, 2);

// console.log(newArray); 

//-------------------------------------------------------------------
// function removeFromArray(arr, elementToRemove) {
//     let result = [];
//     let i = 0;

//     while (i < arr.length) {
//         if (arr[i] !== elementToRemove) {
//             result.push(arr[i]);
//         }
//         i++;
//     }

//     return result;
// }


// let myArray = [1, 2, 3, 4, 2, 5];
// let newArray = removeFromArray(myArray, 2);

// console.log(newArray); 



/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function oddArray(arr){
//     let result =[]
//     for(i=0;i<arr.length;i++){
//         if(arr[i]%2===1){
//             result.push(arr[i])
//         }
//     }
//     return result

// }
// odd =[1,2,3,4,5]
// console.log(oddArray(odd))

//--------------------------------------------------------
// function oddArray(arr){
//     let result =[]
//     let i = 0
//     while(i < arr.length){
//         if(arr[i]%2===1){
//             result.push(arr[i])
//         }
//         i++;

//     }
//     return result

// }
// odd =[1,2,3,4,5]
// console.log(oddArray(odd))


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function sumArray(arr){
//     let sum=0
//     for(i=0;i<arr.length;i++){
//         sum += arr[i]
       

//     }
//     return sum/arr.length
// }
// array = [1,2,3,4,5]
// console.log(sumArray(array))
// --------------------------------------------------------------------
// function sumArray(arr){
//     let sum = 0;
//     let i = 0;

//     while (i < arr.length) {
//         sum += arr[i];
//         i++;
//     }

//     return sum/arr.length;
// }

// let array = [1, 2, 3, 4, 5];
// console.log(sumArray(array));



/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/



// function shorterInArray(arr) {

//     let shortest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length < shortest.length) {
//             shortest = arr[i];
//         }
//     }

//     return shortest;
// }
// let strings = ["alex","mercer","madrasa","rashed2","emad","hala"];
// let shortestString = shorterInArray(strings);
// console.log(shortestString); 
//----------------------------------------------------------------------
// function shorterInArray(arr) {

//     let shortest = arr[0];
//     let i = 1;

//     while ( i < arr.length) {
//         if (arr[i].length < shortest.length) {
//             shortest = arr[i];
//         }
//         i++
//     }

//     return shortest;
// }
// let strings = ["alex","mercer","madrasa","rashed2","emad","hala"];
// let shortestString = shorterInArray(strings);
// console.log(shortestString); 






/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function repeatChar(str,char){
//     let c=0
//     for (i=0;i<str.length;i++){
//         if (str[i]===char){
//             c+=1
//         }

//     }
//     return c
// }
// let string = "alex mercer madrasa rashed2 emad hala"
// console.log(repeatChar(string,"a"))

//--------------------------------------------------------------
// function repeatChar(str,char){
//     let c=0
//     let i =0
//     while (i<str.length){
//         if (str[i]===char){
//             c+=1
//         }
//         i++

//     }
//     return c
// }
// let string = "alex mercer madrasa rashed2 emad hala"
// console.log(repeatChar(string,"a"))

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function evenIndexOddLength(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length % 2 !== 0) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// let strings = ["alex","mercer","madrasa","rashed2","emad","hala"]
// console.log(evenIndexOddLength(strings));
//---------------------------------------------------------------------------
// function evenIndexOddLength(arr) {
//     let result = [];
//     let i=0
//     while ( i < arr.length) {
//         if (arr[i].length % 2 !== 0) {
//             result.push(arr[i]);
//         }
//     }
//     i++

//     return result;
// }

// let strings = ["alex","mercer","madrasa","rashed2","emad","hala"]
// console.log(evenIndexOddLength(strings));



/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function powerElementIndex(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result.push(Math.pow(arr[i], i));
//     }

//     return result;
// }
// let numbers = [44, 5, 4, 3, 2, 10]
// console.log(powerElementIndex(numbers));
//-------------------------------------------------------------------------

// function powerElementIndex(arr) {
//     let result = [];
//     let i=0
//     while ( i < arr.length) {
//         result.push(Math.pow(arr[i], i));
//         i++
//     }

//     return result;
// }
// let numbers = [44, 5, 4, 3, 2, 10]
// console.log(powerElementIndex(numbers));



/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function evenNumberEvenIndex(arr){
//     let result =[]
//     for(i=0;i<arr.length;i++){
//         if(arr[i]%2===0 && i%2===0){
//             result.push(arr[i])
//         }
        
//     }
//     return result
// }
// let array =[5,2,2,1,8,66,55,77,34,9,55,1]
// console.log(evenNumberEvenIndex(array))

//---------------------------------------------------------------------------
// function evenNumberEvenIndex(arr){
//     let result =[]
//     let i=0
//     while(i<arr.length){
//         if(arr[i]%2===0 && i%2===0){
//             result.push(arr[i])
//         }
//         i++
//     }
//     return result
// }
// let array =[5,2,2,1,8,66,55,77,34,9,55,1]
// console.log(evenNumberEvenIndex(array))