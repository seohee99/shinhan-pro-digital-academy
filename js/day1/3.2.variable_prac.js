// node.js 환경에서 진행할 경우.
const readline = require('readline')
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.on('line', function(line) {
        // 코드 작성
        const scores = line.split(" ");
        let flag = true;
        for(i=0; i<scores.length;i++){
            if(scores[i] < 65){
                flag = false;
            }
        }
        console.log(flag)
        // 코드 종료
        rl. close();
});

// 비교 연산자 사용
// rl.question('첫 번째 점수를 입력하세요: ', (score1) => {
//     rl.question('두 번째 점수를 입력하세요: ', (score2) => {
//         rl.question('세 번째 점수를 입력하세요: ', (score3) => {
//             const isAllScoresGreaterThan65 = Number(score1) > 65 && Number(score2) > 65 && Number(score3) > 65;
//             console.log(isAllScoresGreaterThan65);
//             rl.close();
//         });
//     });
// });

// Browser환경에서 진행할 경우
// >>> let s1 = prompt(“점수입력1: ”)
//  let s2 = prompt(“점수입력2: ”)


