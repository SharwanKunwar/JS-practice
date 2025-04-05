function createOrder(cart){
    const promise = new Promise((resolve, reject)=>{
        let isvalid = orderValidation(cart);
        if(!isvalid){
            throw new Error("Error: something went wrong!!!");
        }else{
            let orderId = createOrderId(cart);
            if(orderId){
                resolve(orderId);
            }else{
                reject(Error);
            }
        }
    })
    return promise;
}
function orderValidation(cart){
    let isOk = true;
    return isOk;
}
function createOrderId(cart){
    let id = "202A5";
    return id;
}
function PaymentProcess(orderId){
    if(orderId.length === 6){
        return "payment Successful"
    }else{
        return "Error: faild to payment";
    }
}



const cart = ["item01", "item02", "item03", "item04"];

const myPromise = createOrder(cart);
myPromise.then((response)=>{
    console.log(response);
    return response;
}).then((response_id)=>{
    return PaymentProcess(response_id);
}).then((payment_resopnse)=>{
    console.log(payment_resopnse);
}).catch((error)=>{
    console.log(error);
})

