//write a javaScript program to find wherther a number is divisible by 2 and 3

let number = 6;

if(number%2 === 0 && number%3 === 0){
    console.log(`The number "${number}" is divisible by 2 and 3.`);
}else{
    console.log(`The number "${number}" is not divisible by 2 and 3.`);
}