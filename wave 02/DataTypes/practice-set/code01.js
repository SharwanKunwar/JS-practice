//create a variable of type string and try to add a number to it.
let myName = "sharwan";
let code = 7;
const id = myName+code;

// console.log(id);



//use typeof operator to find the datatype of the tring in last question.
// console.log(typeof id);

// 3. create a const object in javascript can you change it to hold a number later?

    const some = {
        name: "sharwan",
        age: 22,
        address: "ktm"
    }
    some.name = "parbesh";
    // console.log(some)



//Try to add a new key to the const object in problem 3 were you able to do it?
some["contact"] = "987676567";
// console.log(some)


// write a js program to create a word meaning dictionary of 5 wrods.

const dictionary = {
    Ephemeral: {
        meaning: "Lasting for a very short time.",
        Example: "The beauty of a sunset is often ephemeral."
    },
    Eloquent: {
        meaning: "Fluent or persuasive in speaking or writing.",
        Example: "She gave an eloquent speech on climate change."
    },
    Meticulous:{
        meaning: "Showing great attention to detail; very careful and precise.",
        Example: " He was meticulous in preparing his resume."
    },
    Serendipity:{
        meaning: "The occurrence of events by chance in a happy or beneficial way.",
        Example: "Finding that old photograph was pure serendipity."
    },
    Resilient:{
        meaning: "Able to recover quickly from difficulties; tough.",
        Example: "Children are often more resilient than we think."
    }

}

console.log("Meaning: ")
console.log(dictionary.Eloquent.meaning);
console.log("\nExample: ")
console.log(dictionary.Eloquent.Example);