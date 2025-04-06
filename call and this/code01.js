
function createUser(userName, password, email){
    setUserName.call(this,userName);
    this.password = password;
    this.email = email;
}
function setUserName(userName){
    const characterType = "@Dev";
    this.userName = userName+characterType;
}



const user = new createUser("Sharwan jung kunwar", "9813sharw@222", "sharwankunwar07@gmail.com");
console.log(user);
