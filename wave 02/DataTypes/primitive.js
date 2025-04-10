//Primitive datatypes
//NNBBSSU

let variable01 = null;          // Null
let variable02 = 22;            // Number
let variable03 = true;          // Boolean
let variable04 = BigInt(33);    // BigInt
let variable05 = "sharwan";     // String
let variable6 = Symbol();       // Symbol
let variable07 = undefined;     // Undefined

console.log(`variable 01 : ${variable01} : ${typeof variable01}`); // object (quirk in JS)
console.log(`variable 02 : ${variable02} : ${typeof variable02}`); // number
console.log(`variable 03 : ${variable03} : ${typeof variable03}`); // boolean
console.log(`variable 04 : ${variable04} : ${typeof variable04}`); // bigint
console.log(`variable 05 : ${variable05} : ${typeof variable05}`); // string
console.log(`variable 06 : ${variable6.toString()} : ${typeof variable6}`); //Symbol
console.log(`variable 07 : ${variable07} : ${typeof variable07}`); // undefined
