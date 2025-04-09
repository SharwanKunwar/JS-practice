
const cart = ["book", "boob", "pen", "penes", "table", "comptuer"];

const promise = createOrder(cart);
console.log(promise);
promise.then((orderId)=>{
    console.log(orderId);
    return orderId;
}).then((orderId_value)=>{
    paymentProcess(orderId_value);
})
.catch((Error)=>{
console.log(Error);
})

setTimeout(()=>{
    console.log(promise);
},6000);


function paymentProcess(orderId){
console.log(`Payment is sucessful with this id : ${orderId}`);
}



//Producer

function createOrder(cart){
    const promise = new Promise((resolve, reject)=>{
        //order creation
        const vali = validation(cart);    // ValidateCart
        //id createin
        if(!vali){
            throw new Eror("Eror: something went wrong!!!");
        }else{
            //logic for createOrder
            const Id = orderId();
            if(Id){
                setTimeout(()=>{
                    resolve(Id);
                },5000);
            }else{
                reject("Error: something went wrong !!! while createing order ID");
            }
        }
    });
    return promise;
}

function validation(cart){
    return true;
}
function orderId(){
    return "pass@1101";
}