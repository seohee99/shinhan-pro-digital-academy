"use strict";
var number = 5;
var text = "Hello world";
var number2 = 5; // 알아서 타입 지정 됨 
var text2 = "Hello world";
var bool1 = true;
var arr1 = ["a", "b", "c"];
var arr2 = ["a", "b", "c"];
// index별로 타입 설정 가능
var sample = [0, function () { }];
// 잘 사용하지 않음 : any
// unknown을 더 많이 씀 
var anyValue = 1;
function func1(params) {
    console.log(params);
}
// return 안함 : void
function func2(num1) {
    console.log(num1);
}
// 함수
// 선언식
function add(a, b) {
    return a + b;
}
add(1, 2);
// 익명 함수, 화살표 함수
var add2 = function (x, y) { return x + y; };
var add3 = function (x, y) { return x + y; };
// ? : 인자가 들어와도 되고, 안들어와도 됨
// 안들어오면 undefined
function greet(name, greeting) {
    return "".concat(greeting || 'Hello', ", ").concat(name);
}
console.log(greet("서희", "반가웡"));
console.log(greet("서희"));
console.log("example");
