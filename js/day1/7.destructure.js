let arr = ["Kim", "Shin"];

// 구조 분해 할당 
let [name1, name2] = arr;

console.log(name1); // Kim
console.log(name2); // Shin

let arr2 = ['a', 'b', 'c', 'd'];
let [v1, v2, ...v3] = arr2;
console.log(v1); // a
console.log(v2); // b
console.log(v3); // ['c', 'd']

let options = {
    title : "menu",
    width : 100,
    height : 200,
    k2 : 'v2',
};

let {height, title:t,...rest} = options;
console.log(height);
console.log(t);
console.log(rest);