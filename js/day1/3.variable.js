function sample1(){
    console.log(name1);
    if (true) {
        let name1 = 2;
    }
    console.log(name1);
}
sample1()
// Error : name1 is not defined

function sample2(){
    if (true) {
        let name2 = 2;
    }
    console.log(name2);
}
sample2()
// Error : name2 is not defined
// 변수 name2는 if 블록 내에서만 유효한 블록 스코프(block scope)를 가지기 때문

function sample3(){
    console.log(name3);
    if (true) {
        var name3 = 2;
    }
    console.log(name3);
}
sample3()
// undefined
// 2