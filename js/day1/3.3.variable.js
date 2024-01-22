// a=" 90:30:80 "이고 :을 기준으로 각각 수학점수, 영어점수, 과학점수이다.문자열 함수를 이용해 공백을 제거하고,각 점수를 각각 math, english, science 변수에 저장한 후,average 란 변수에 평균값을 저장하고 출력하시오.이 때 출력의 형태는 “평균 점수는 ~~입니다.”로 하시오

let scores = "90:30:80";
// code 작성
let [math, english, science] = scores.trim().split(":");

let average= (Number(math) + Number(english) + Number(science)) / 3;

let msg = `평균 점수는 ${average}입니다.`;
// code 종료
console.log(msg);