function run(){
    console.log("3초 후 실행");
}

console.log("실행");
setTimeout(run, 3000); // 3초 후 run을 실행하겠다 
console.log("종료");