const username = "SharwanKunwar";
fetch(`https://api.github.com/users/${username}`).then((responce)=>{
    return responce.json();
}).then((responce_data)=>{
    console.log(responce_data);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("process end with or without error");
})