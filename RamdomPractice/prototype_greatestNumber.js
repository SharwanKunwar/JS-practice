const myArray = [22,33,44,55];

Array.prototype.greatestNumber = function(){
    let max = 0;
    for(let i=0; i<this.length; i++){
        if(this[i] > max){
            max = this[i];
        }
    }
    return max;
}


let GN = myArray.greatestNumber();
console.log(`The greatest number is : ${GN}`);