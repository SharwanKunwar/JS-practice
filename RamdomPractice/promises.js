// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let isOk = true;
//         if(isOk){
//             resolve({
//                 username: "Sharwan jung kunwar",
//                 age: 22,
//                 address: "Attriya-kailali-Neapl"
//             })
//         }else{
//             reject("Error: aayo muzi");
//         }
//     },2000)
// })

// myPromise.then((user)=>{
//     console.log(user.address);
//     return user.age;
// }).then((user_data)=>{
// console.log(user_data);
// }).catch((error)=>{
//     console.log(error);
// })

const goal = new Promise((resolve, reject) => 
{
    let aim = true;

    if (aim) {
        resolve({
            task01: "Problem-solving skills",
            task02: "Self-development",
        });
    } else {
        reject("Comfort Zone: No growth!");
    }
});

goal.then((result) => {
        console.log("Success! Here are your achievements:", result);
    }).catch((error) => {
        console.log("Failure! You stayed in:", error);
    });
