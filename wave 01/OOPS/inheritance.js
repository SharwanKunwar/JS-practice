class User{
    //constructor
    constructor(userName, age){
        this.userName = userName;
        this.age = age;
    }

    //method01
    logMe(){
        console.log(`userName is : ${this.userName}`);
    }
    //method02
    getter(){
        console.log(this);
    }
}

//inherit user proparty another class teacher
class teacher extends User
{
    //constructor
    constructor(userName,email,qualification,age){
        super(userName,age); 
        this.email = email; 
        this.qualification = qualification;
    }
    //method01
    teach(){
        console.log("teaching...");
    }
    
}


//makeing objects or instences

const user01 = new User("sharwan kunwar", 22);
// console.log(user01);

const t01 = new teacher("rakesh","shar@gmail.com","bechlor",33);
t01.logMe();
t01.getter();

