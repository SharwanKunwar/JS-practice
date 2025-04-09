
//Good practice 
const gitHubPromise = new Promise((resolve, reject)=>{
    const finalURL = "https://api.github.com/users/SharwanKunwar";

    fetch(finalURL).then((response)=>
    {
        if(!response.ok){
            throw new Error("Error: something went wrong !!!");
        }else{
            return response.json();
        }
    }).then((data)=>{
        resolve(data);
    }).catch((error)=>{
        reject(error);
    })

})

gitHubPromise
.then((responce_data)=>{
return {
    name: responce_data.name || "userName",
    followers: responce_data.followers || "Not provided",
    address: responce_data.location || "Home Planet Earth",
    company: responce_data.company || "Xyz",
}
}).then((data)=>{
    const person = data;
    console.log(typeof person);
    console.table(person);
})
.catch((error)=>{
    console.log(error);
})


// best practice

fetch("https://api.github.com/users/SharwanKunwar")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error: something went wrong !!!");
        }
        return response.json();
    })
    .then((responce_data) => {
        return {
            name: responce_data.name || "userName",
            followers: responce_data.followers || "Not provided",
            location: responce_data.location || "Home Planet Earth", // Renamed from 'address' to 'location'
            company: responce_data.company || "Xyz",
        };
    })
    .then((data) => {
        console.log(typeof data);  // Outputs "object"
        console.table(data);       // Nicely formatted table of the object
    })
    .catch((error) => {
        console.log(error.message); // Logs the error message in case of a failure
    });
