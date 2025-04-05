# 🛒 JavaScript Promise Example: Order Creation Simulation

This project demonstrates how Promises work in JavaScript by simulating a basic e-commerce order creation flow.

---

## 📦 Full Code Example

```js
// ==================
// 🛒 Cart Items
// ==================
const cart = ["book", "boob", "pen", "penes", "table", "comptuer"];

// ==================
// 📤 Calling createOrder
// ==================
const promise = createOrder(cart);

// Logs the initial state of the promise (pending)
console.log(promise);

// Handle the resolved value (orderId) or errors
promise.then((orderId) => {
    console.log(orderId); // Logs order ID
}).catch((Error) => {
    console.log(Error); // Logs any error
});

// Logs the final state of the promise after 6 seconds
setTimeout(() => {
    console.log(promise);
}, 6000);


// ==================
// 🏭 Producer Function: createOrder()
// ==================
function createOrder(cart) {
    const promise = new Promise((resolve, reject) => {

        // Step 1: Validate the cart
        const vali = validation(cart);

        // Step 2: If validation fails, throw error
        if (!vali) {
            throw new Error("Error: something went wrong!!!");
        } else {
            // Step 3: Create an order ID
            const Id = orderId();

            // Step 4: Resolve the promise after 5 seconds if ID exists
            if (Id) {
                setTimeout(() => {
                    resolve(Id);
                }, 5000);
            } else {
                // Step 5: Reject if ID creation fails
                reject("Error: something went wrong !!! while creating order ID");
            }
        }
    });

    return promise;
}


// ==================
// ✅ Helper Functions
// ==================
function validation(cart) {
    // Simulates validation logic (returns true)
    return true;
}

function orderId() {
    // Returns a hardcoded order ID
    return "pass@1101";
}
