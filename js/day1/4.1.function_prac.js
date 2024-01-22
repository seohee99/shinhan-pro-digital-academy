// 사용자로 점수를 3개 입력받아 모든 점수가 65점보다 클 경우 합격 아닐경우 불합격을 출력하세요 단, 0~100 이 아닌 숫자가 입력된경우 잘못된 “잘못된 점수가 입력되었습니다" 를 출력하세요

const readline = require('readline')
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.on('line', function(line) {

        const scores = line.split(" ");
        let flag = true;
        for(i=0; i<scores.length;i++){
            if(scores[i] < 0 || scores[i] > 100){
                flag = 0;
                break;
            }
            if(scores[i] < 65){
                flag = false;
            }
        }

        if(flag === 0){
            console.log("잘못된 점수가 입력되었습니다.");
        }
        else if(flag === true){
            console.log("합격입니다.");
        }
        else{
            console.log("불합격입니다.");
        }

        rl. close();
});