import * as cheerio from 'cheerio';
const data = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">
        <div class="content">
            <ul class="profile">
                <li class="other">수지</li>
                <li class="me">
                    <a href="/profile/me">서희</a>
                </li>
                <li class="other">소희</li>
            </ul>
        </div>
    </div>
</body>
</html>`

// html 초기화
const $ =cheerio.load(data);
// console.log($.html())


// html 추출
//console.log($('a')); // css 선택자로 찾기 :: a태그 찾아서 출력
//console.log($('#root')); // id도 출력 가능

// console.log($('.other').text()); // 클래스, 텍스트 
// console.log($('a').prop('href')); // 속성값 추출 

// map 함수를 이용한 요소 여러개 출력 
// get()
const items = $('li').map((index, element)=>{
    return $(element).text().trim();
}).get();
console.log(items);

