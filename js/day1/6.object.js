const KEY = "SAMPLE"
const obj1 = {
    name:'John',
    sayHI : function(){
        console.log(this.name, ": 친구야 반갑다!");
    },
    [KEY] : "sampleValue",
}

console.log(obj1);
console.log(obj1.name);
console.log(obj1['name']);
obj1.sayHI();

console.log(obj1.sampleKey); // undefined
console.log(obj1[KEY]);
console.log(obj1.KEY);


// 객체안에 객체 생성
const obj2 = {
    name:'John',
    sayHI : function(){
        console.log(this.name, ": 친구야 반갑다!");
    },
    nested:{
        city : 'Seoul'
    },
    [KEY] : "sampleValue",
}

function func1(obj){
    console.log(obj.nested?.city); // 있으면 참조, 없으면 undefined 
}

console.log(obj2.nested)
console.log(func1(obj1))
console.log(func1(obj2))