// class 문법 : 무늬만 클래스, 실제로는 prototype 기반으로 동작 
class Animal{
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`${this.name}이 달린다`);
    }
    eat(){
        console.log(`${this.name}이 먹는다`);
    }
}

const animal = new Animal();

class Rabbit extends Animal{
    constructor(name, color){
        super(name);
        this.color = color;
    }
    newFunction(){
        console.log(`${this.name}가 새로운 기능을 가졌다`);
    }
}

const rabbit1 = new Rabbit("토끼", "brown");
console.log(rabbit1);
rabbit1.run();
rabbit1.newFunction();