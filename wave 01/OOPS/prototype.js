const games = ["COD", "pubg", "FF", "Car-Drive"];
let myName = "sharwan jung kunwar        ";

String.prototype.trueLength = function(){
    // console.log(this)
    console.log(`content length is : ${this.length}`);
    console.log(`True Lenght is : ${this.trim().length}`);
}

Array.prototype.findBestGame = function(arr){
    console.log(`The best game is : ${arr[1]}`);
}

Object.prototype.fuck = function(){
    console.log("hekkkkkkkk");
}



// games.findBestGame(games);
// games.fuck();

myName.trueLength();

