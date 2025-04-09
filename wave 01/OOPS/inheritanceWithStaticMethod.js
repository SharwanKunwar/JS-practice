class human{
    name;
    age;
    gender;
    address;

    constructor(name,age,gender,address){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    getter(){
        console.log(this);
    }
    static speak(){
        console.log("Hey, there what's up");
    }
    
}

class laptop extends human{
    id;
    price;
    color;
    brand;
    constructor(name,id,price,color,brand){
        super(name);
        this.id = id;
        this.price = price;
        this.color= color;
        this.brand = brand;
    }
}


const person01 = new human("sharwan jung kunwar",20,"male","Kathmandu-Nepal");
// person01.getter();   
// person01.speak();    //doesn's work
// human.speak();       // works


const myLaptop = new laptop("acer","10101","1000005","black","Acer aspire-5");
// myLaptop.getter();
// myLaptop.speak();    // doesn't work
// laptop.speak();      //works