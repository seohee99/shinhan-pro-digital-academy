// 사용자로부터 정수를 입력받아, 입력된 정수 만큼 별 역순으로 찍기

const readline = require('readline')
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.on('line', function(line) {
        for(let i=parseInt(line); i>0; i--){
            console.log("*".repeat(i));
        }
        rl. close();
});