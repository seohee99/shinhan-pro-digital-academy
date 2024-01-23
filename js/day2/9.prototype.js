// object
const animal1 = {
	name: "lion",
	run(){
		console.log(`${this.name} 동물이 달린다.`);
	},
	run2: function(){
		console.log("동물이 달려용");
	}
}

animal1.run();
animal1.run2();


function Animal(name) {
    this.name = name || 'lion';
    this.run = function () {
        console.log(`${this.name} 동물이 달린다.`)
    }
}

const animal2 = new Animal("사자");
console.log(animal2)
console.log(animal2.constructor) // constructor은 생성자 함수 그 자체
animal2.run()

// 위에서 Animal을 정의하고 밑에서 eat을 추가해도 됨
// prototype은 생성자 함수에 정의한 모든 객체가 공유할 원형
// prototype은 생성자 함수에 사용자가 직접 넣음 
Animal.prototype.eat = function () {
    console.log(`${this.name}가 먹는다`)
}

animal2.eat();
console.log(animal2);
// __proto__는 생성자 함수를 new로 호출할 때 정의해 두었던 prototype을 참조한 객체
// __proto__는 new를 호출할 때 prototype을 참조하여 자동으로 만들어짐 
console.log(animal2.__proto__);

function Rabbit(name, color) {
    // argument : 함수라면 가지고 있는 특수한 변수, 인자를 나타내는 유사 배열
    Animal.apply(this, arguments); // Animal 함수를 적용하되 context를 this(Rabbit)으로 한다.
    this.color = color; // Animal의 this 키워드는 Animal, Rabbit 안의 this 키워드는 Rabbit을 가리킴 
}

// Object.create 함수는 객체는 만들되 생성자는 실행하지 않음
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit; // 생성자의 클래스 생성자는 자기 자신

// 위 두줄을 assign으로 하면 한줄로 해결!
Rabbit.prototype = Object.assign(Rabbit.prototype, Animal.prototype);

const rabbit1 = new Rabbit("토끼", "white");

rabbit1.run();
rabbit1.eat();
console.log(rabbit1);
console.log(rabbit1.__proto__);