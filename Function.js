//Example of type 2 with argument and no return
// function Add(num)
// {
//     console.log(num+num)
// }
// Add(10)

//Area of circle by type 2========================================================================

// function Area(r)
// {
// console.log(3.14*r*r);
// }
// let r=parseInt(prompt("Enter a radius"))
// Area(r)


//write a program to chech number is even or odd using type 2========================================

// function Check(n)
// {
// if(n%2==0)
//     console.log("Number is even")
// else
//     console.log("number is odd")
// }
// let num=parseInt(prompt("Enter a number"))
// Check(num)

// function Square(num){
//     return num*num
// }
//  let number=parseInt(prompt("Enter a number"))
// console.log (Square())
//==================================================================================================
// function Name(name){
// return b
// }
// let b=prompt("Enter a name:")
// console.log(Name(b));
//=================================================================================================

// function Sum(){
//     let result=0
//   for( let i=1;i<=10;i++){
//     result=result+i
//   }
// return result
// }
// console.log(Sum())
//==================================================================================================



//ASSIGNMENT TASKS START
//Without argument and no return value
//1. Wap to take a input from the user find square of that number then check number is even or odd using function type 1
// function SquareTask(){
// let num=parseInt(prompt("Enter a number"))
// let square=num*num
// console.log(square)
// if(square%2==0){
// console.log("Even")
// }
// else{
//     console.log("Odd")
// }
// }
// SquareTask()

//=============================================================================================
// Function without arguments but with return value
//2. Wap to return sum of all number present in array using type 4
// function sumArray() {
//     let arr = [10, 20, 30, 40, 50];

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// let result = sumArray();
// console.log("Sum of array elements = " + result);
//=================================================================================================
// Function with argument and with return value
// //3. Wap to take input from the user and return the last digit of that number using function type 3

// function getLastDigit(num) {
//     return num % 10; 
// }
// let number = parseInt(prompt("Enter a number:"));
// let lastDigit = getLastDigit(number);
// console.log("Last digit of " + number + " is " + lastDigit);

//========================================================================================================
// Function without argument but with return value
// 4.Wap to take a input from the user and check number is divisible by 3 or not if divisible then print the table if not divisible just print that number using function type 4
// function Divisible() {
//     let num = parseInt(prompt("Enter a number:"));
//     if (num % 3 === 0) {
//         console.log(num + "  Divisible by 3:");
//         for (let i = 1; i <= 10; i++) {
//             console.log(num + " x " + i + " = " + (num * i));
//         }
//         return "Table printed successfully.";
//     } else {
//         console.log(num + "Not divisible by 3.:");
//         console.log(num);
//         return "Number printed only.";
//     }
// }
// let result = Divisible();
// console.log("Function returned: " + result);
//ASSIGNMENT TASK END HERE