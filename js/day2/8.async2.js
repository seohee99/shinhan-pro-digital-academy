// promise 객체

function fastFunction(data){
    return new Promise((resolve, reject) => {
        setTimeout( function () {
            const result = data * 2;
            console.log('Fast function done', result)
            resolve(result);
        },1000 )
    })
}

function slowFunction(data){
    return new Promise((resolve, reject) => {
        setTimeout( function () {
            const result = data +10;
            console.log('Slow function done', result)
            resolve(result);
        },3000 )
    })
}
// sol1) promise 객체 생성 후 then과 catch로 함수를 전달 - then의 무한 반복
function runTasks () {
    return fastFunction(10)
    .then((data)=>{
        return slowFunction(data);
    }).then(data=>{
        console.log("작업완료");
    }).catch(err=>{
        console.log(err);
    })
}

// sol2) promise.all() - 비동기 함수를 병렬적으로 시작해서 결과를 모아서 작업한다 
function runTasks () {
    Promise.all([fastFunction(10), slowFunction(5)]) // fastFunction, slowFunction을 각각 병렬적으로 수행해서 결과를 all로 묶음
    .then(([result1, result2])=>{ // 결과를 가지고 다음 작업 수행 
        console.log("작업완료", result1, result2);
    });
}

runTasks();