class react {
    name;
    good;
    constructor(name, good){
        this.name = name;
        this.good = good;
    }

    display(){
        console.log(this.name);
        console.log(this.good);
    }
}


const obj01 = new react("sharwan", "yes");
obj01.display();