const description01 = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(description01);

const hold = Math.ceil(Math.PI);
// console.log(hold);


//checking property
const some = {
name: "sharwan",
age: 22,
love: function(){
console.log("help")
}

}

let hold01 = Object.getOwnPropertyDescriptor(some, "name");
console.log(hold01);

Object.defineProperty(some, "name",{
    writable: false,
    enumerable: false,
})


for(let [key, value] of Object.entries(some)){
    if(typeof value != "function"){
        console.log(`${key} : ${value}`);
    }
}




// console.log(Object.getOwnPropertyDescriptor(some, "name"));