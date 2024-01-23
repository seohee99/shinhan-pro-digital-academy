function fastFunction(err, data, done){
    setTimeout(function () {
        done(undefined, data*2);
    }, 1000)
}
function slowFunction(err, data, done){
    setTimeout(function () {
        done(undefined, data + 10);
    }, 3000)
}

// fastFuntion 작업이 이루어진 후 slowFunction 작업이 이어지도록 보장하고 싶다!
// setTimeout이 들어간 이상 비동기적으로 작동하기 때문에 우리가 조절할 수 없다
// callback 함수로 조정! 

// 비동기적으로 전달하되, 비동기 함수 내에서 블로킹 한 후에 호출할 함수를 함께 전달해주자!
// 가동성이 떨어지는 구조 : 이어지는 함수가 많아지면 코드의 깊이가 너무 깊어진다
function runTasks(callback) {
    // fastFunction 실행 -> slowFunction 실행 
    fastFunction(undefined, 10, (err, data) => {
        if(err) return callback(err);
        console.log("fastfunction", data); 

        slowFunction(undefined, data, (err, data) => {
            if(err) return callback(err);
            console.log("slowfunction", data); 
        })
    })
}

runTasks(err =>{
    console.error(err);
})