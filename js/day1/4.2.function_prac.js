// 사용자로 점수를 1개 입력받아 홀수, 짝수 판단

const readline = require('readline')
const rl = readline.createInterface({
        
        input: process.stdin,
        output: process.stdout
    })

    rl.on('line', function(line) {
        let flag = false;
        if (line % 2 === 0){
            flag = true;
        }

        if(flag === true){
            console.log("짝수입니다.");
        }
        else{
            console.log("홀수입니다.");
        }

        rl. close();
});