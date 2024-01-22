// 사용자로부터 정수를 입력받아, 해당 정수만큼 “안녕”을 출력하세요.

const readline = require('readline')
const rl = readline.createInterface({
        
        input: process.stdin,
        output: process.stdout
    })

    rl.on('line', function(line) {
        
        for(let i=0; i<parseInt(line); i++){
            console.log("안녕!");
        }
        rl. close();
});