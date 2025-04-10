//Write a javaScript program to find whereher a number is divisible by either 2 or 3

let num = 7;

if(num%2 == 0 || num%3 == 0){
    console.log(`The number "${num}" is divisible by either 2 or 3`);
}else{
    console.log(`The number "${num}" is divisible by Nor 2 or 3`);
}