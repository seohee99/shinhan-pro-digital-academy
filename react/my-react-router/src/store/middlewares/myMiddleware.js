const myMiddleware = (store) => (next) => (action) => {
    return next(action);
};

export default function myMiddleware2(store){
    console.log("store",store);
    return function(next){
        console.log("next",next);
        // next는 dispatch 함수 

        return function(action){
            // 처리할 작업 
            console.log("action",action);
            return next(action);
        }
    }
}


// 액션을 {meta: {delay : N}}에 따라 N 밀리초만큼 지연시킴
// dispatch가 함수를 반환해서 취소할 수 있게함
// meta 값을 읽어서 취소할 수 있게 함

const timeoutScheduler = (store) => (next) => (action) => {
    if(!action.meta || !action.meta.delay) {
        return next(action);
    }

    let intervalid = setTimeout(() => next(action), action.meta.delay);

    return function cancel() {
        clearInterval(intervalid);
    };
};

// 액션에 promise를 보낼 수 있게함
// promise가 해결되면 그 결과가 액션으로서 보내짐
// 약속은 dispatch에서 반환되므로 거부를 처리할 수 있음 
const vanillaPromise = (store) => (next) => (action) => {
    if (typeof action.then !== "function"){
        return next(action);
    }
    return Promise.resolve(action).then(store.dispatch);
};

// 액션 대신 함수를 보낼 수 있게함
// 이 함수는 dispatch와 getState를 인수로 받음

// getState()의 조건에 따른 이른 종료나 비동기 흐름 제어에 유용함
// dispatch는 보내진 함수의 반환값을 반환함