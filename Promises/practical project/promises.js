//syntax

// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let isOk = true;
//         if(isOk){
//             resolve({
//                 userName: "Sharwan jung kunwar",
//                 password: "mahakal9814631974"
//             });
//         }else{
//             reject("Error: something went wrong!!!");
//         }
//     },1000);
// });

// async function consumeMyPromise(){
//     try{
//         const responce = await myPromise;
//         console.log(responce);
//     }catch(error){
//         console.log(error);
//     }
// }
// consumeMyPromise();


//----------------------------------------------------------------
//getting data from api

// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let isOk = true;
//         if(isOk){
//             resolve();
//         }else{
//             reject("Error: something went wrong !!!");
//         }
//     },1000);
// })

// async function getAllUsers(){
//     try{
//         const responce = await fetch("https://jsonplaceholder.typicode.com/users");
//         const myData = await responce.json();
//         console.log(myData);
//     }catch(error){
//         console.log(error);
//     }
    
// }
// getAllUsers();





//------------------------------------- New method -----------------------------
// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let OperationReady = true;
//         if(OperationReady){
//             resolve();
//         }else{
//             reject("Error: something went wrong!!!");
//         }
//     },1000);
// })


//thanable process
fetch("https://jsonplaceholder.typicode.com/users").then((responce)=>{
    return responce.json();
}).then((json_data)=>{
    console.log(json_data);
}).catch((error)=>{
    console.log(error);
})



