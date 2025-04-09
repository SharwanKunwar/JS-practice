//normal class

class human {
    name;
    id;
    address;
    email;
    contact;


    // method01
    setter(id,name,address,email,contact){
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
        this.contact = contact;
    }
    // method02
    getter(){
        console.log(this);
    }
    // method03
    captlizeUserName(){
        return this.name.toUpperCase();
    }
}

const h01 = new human();
h01.setter(777,"sharwan jung kunwar", "attriya-nepal","sharwan@gmail.com", "9814631974");
const humanData = h01.getter();

console.log(h01.captlizeUserName());
















// //constructor class
// class user{
//     constructor(a,b,c){
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     displayValue(){
//         console.log(this.a,this.b,this.c);
//     }
// }


// const p01 = new user(10,20,30);
// p01.displayValue();