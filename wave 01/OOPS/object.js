// function createUser(userName, pass, score){
//     this.userName = userName;
//     this.pass = pass;
//     this.score = score;
// }

// createUser.prototype.gooooooooooooood = function(){
//     this.score++;
//     console.log("wowowowowowoowowwoowowow");
// }
// createUser.prototype.printUser = function(){
//     console.log(`user is ${this.userName}`);
// }


// const p01 = new createUser("sharwan","dob2050","10");
// p01.gooooooooooooood();
// p01.printUser();
// console.log(p01.score);


//------------------ prototype making ---------------------------------------------------
const numbers = [999,34,354,444];
const ages = [22,45,33,23];

Array.prototype.highestNum = function(){
/*
    way01 to solve
        let max = 0;
        let sortedArray = this.sort();
        for(let i=0; i<sortedArray.length; i++){
            if(max<this[i]){
                max=this[i];
            }
        }
// return max;
*/

        //way two to solve
            let sotedArray = this.sort();
            let max = sotedArray[sotedArray.length-1];
            return max;
}


// let greatestNumber = numbers.highestNum();
// console.log(`The greatest number is : ${greatestNumber}`);
let oldPerson = ages.highestNum();
console.log(`olderst person age is : ${oldPerson}`);




