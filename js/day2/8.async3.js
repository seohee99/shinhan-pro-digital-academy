// Async & Await

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function fastFunction(data){
    return new Promise((resolve, reject) => {
        setTimeout( function () {
            const result = data * 2;
            console.log('Fast function done', result)
            resolve(result);
        },1000 )
    })
}

async function slowFunction(data){
    await delay(3000);
    const result = data + 10;
    console.log("slow function done", result)
    return result;
}

async function runTasks() {
    let result = await fastFunction(10);
    result = await slowFunction(result);
    console.log("작업 완료", result);
}

runTasks();