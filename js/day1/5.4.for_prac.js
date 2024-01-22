// 1-입력한 숫자까지 숫자중 3과 5의 공배수일경우 “3과 5의 공배수” 나머지 숫자중 3의배수일경우 “3의배수” 나머지 숫자중 5의배수일경우 “5의배수” 모두 해당되지 않을경우 그냥 숫자를 출력하세요

const readline = require('readline')
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    // 'line'은 이벤트 이름
    // https://nodejs.org/api/readline.html#:~:text=Source%20Code%3A%20lib%2Freadline.js%20The%20node%3Areadline%20module%20provides%20an,callback%20and%20sync%20APIs%3A%20const%20readline%20%3D%20require%28%27node%3Areadline%27%29%3B
    rl.on('line', function(line) {
        for(let i=1; i<=parseInt(line); i++){
            if ((i%3 == 0) && (i%5 == 0)){
                console.log("3 & 5 공배수");
            }else if(i%3 == 0){
                console.log("3의 배수");
            }else if(i%5 == 0){
                console.log("5의 배수");
            }else{
                console.log(i);
            }
        }
        rl. close();
});