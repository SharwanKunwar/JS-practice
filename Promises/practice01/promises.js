// fetch("https://google.com").then().catch.finally();


// promise number 01
// const promiseOne = new Promise((resolve,reject)=>{
    //Do an async task
    //Database calls, cryptography, network
//     setTimeout(()=>{
//         console.log("async task is complete")
//         resolve();
//     },1000)
// });

// promiseOne.then(()=>{
//     console.log("promise consumed");
// });

//------------------------------------------------------------------
//another way
// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("async task 02 is complete")
//         resolve();
//     },1000);
// }).then((resolve)=>{
// console.log("promise consumed 02");
// })

//-----------------------------------------------------------------
//promise 03 
// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({
//             Name: "Sharwan jung kunwar",
//             age: 22,
//             address: "kathmadu-Nepal"
//         });
//     },1000)
// })

// promiseThree.then((user)=>{
// console.log(user);
// console.log(user.Name);
// })


//-----------------------------------------------------------------
//promise 04 
// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true;

//         if(!error){
//             resolve({
//                 product: "Book",
//                 page: 100,
//                 color: "white",
//                 type: "line"
//             });
//         }else{
//             reject("Error: something went wrong !!!");
//         }
//     },2000)
// });

// promiseFour.then((item)=>{
// // console.log(item.color);
// return item.color;
// }).then((CN)=>{
//     console.log(CN);
// }).catch((error)=>{
//     console.log(error);
// }).finally((msg)=>{
// console.log("The promise is either resolve or rejected")
// })



//-----------------------------------------------------------------
//promise 05 

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let isOk = false;
        if(isOk){
            resolve({
                day01: "sunday",
                day02: "monday",
                day03: "tuesday",
                day04: "wednesday",
                day05: "thrusday",
                day06: "friday",
                day07: "saturday"
            });
        }else{
            reject("Error: something went wrong !!!");
        }
    },1000);
})

// promiseFive.then((weekDay)=>{
// console.log(weekDay);
// return weekDay.day06;
// }).then((bestDay)=>{
//     console.log(bestDay);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("\noperation complete either successfully or with error.\n")
// })

async function consumePromiseFive(){
    try{
        const responce = await promiseFive;
        console.log(responce.day06);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive();