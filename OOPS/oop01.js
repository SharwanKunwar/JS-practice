const user = {
    name: "sharwan",
    age: 22,
    address: "ktm",
    hobbie: function(){
        console.log("gg");
    },
    intro: function(){
        console.log(`love is ${this.name}`);
    }
}

console.log(user.hobbie());
console.log(user.intro());