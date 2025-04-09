// function deadMessage(person){
//    const mypro =  new Promise((resolve, reject)=>{
//         if(person){
//             resolve(`Hello ${person}, you are alive`);
//         }else{
//             reject("Error: you are dead");
//         }
//     })
//     return mypro;
// }

// const promise = deadMessage("John");
// promise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// })


//-----------------------------------------------
//promise demonstration

// using callback
function createOrder(cart, callback) {
    console.log("Creating order...");

    setTimeout(() => {
        let orderId = "12345";
        console.log("Order created!");
        callback(orderId);
    }, 2000); // Simulating async behavior
}

function proceedToPayment(orderId) {
    console.log(`Processing payment for Order ID: ${orderId}`);
}

const cart = ["item1", "item2", "item3", "item4", "item5"];

createOrder(cart, function(orderId) {
    proceedToPayment(orderId);
});







//using promises
function createOrder(cart) {
    console.log("Creating order...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let orderId = "12345";
            console.log("Order created!");
            resolve(orderId);
        }, 2000);
    });
}

function proceedToPayment(orderId) {
    console.log(`Processing payment for Order ID: ${orderId}`);
}

const promise = createOrder(cart);

promise.then((orderId) => {
    proceedToPayment(orderId);
});





//-----------------------------------------------
//async await demonstration
function createOrder(cart) {
    console.log("Creating order...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let orderId = "12345";
            console.log("Order created!");
            resolve(orderId);
        }, 2000);
    });
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Processing payment for Order ID: ${orderId}`);
            resolve("Payment successful!");
        }, 2000);
    });
}

async function placeOrder(cart) {
    try {
        const orderId = await createOrder(cart);
        const paymentStatus = await proceedToPayment(orderId);
        console.log(paymentStatus);
    } catch (error) {
        console.log(error);
    }
}

placeOrder(cart);
