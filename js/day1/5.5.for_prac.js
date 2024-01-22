// word = ["school", "game", "piano", "science", "hotel", "mountain"] 중 글자수가 6글자 이상인 문자를 모아 새로운 배열 생성하세요

let word = ["school", "game", "piano", "science", "hotel", "mountain"];

let word2 = word.filter(function(value){
    if (value.length >= 6 ){
        return true;
    }
})

console.log(word2);