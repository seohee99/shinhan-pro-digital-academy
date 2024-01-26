import axios from "axios";
import * as cheerio from 'cheerio';
import fs from 'fs';

// 페이지 요청
async function fetchPage(url){
    try {
        const response = await axios.get(url);
        console.log("success request");
        return response.data
    } catch (error) {
        console.error(error);
        return null;
    }

}

// parsing
// 태그
// quote : .quote .text
// author : .quote .author
// authorUrl : .quote a
// about 속성의 href에서 텍스트들 긁어오기 

async function parseData(pageData){
    
    // parsing
    const $ = cheerio.load(pageData);
    
    // promise 객체 배열로 생성한 다음 모든 promise가 완료될 때 까지 기다려야 함
    const quotes = $('.quote').map(async (index, element) => {

        // 각 item의 quote(title), author, authorUrl 수집
        const quote = $(element).find('.text').text().trim()
        const author = $(element).find('.author').text().trim()
        const authorUrl = $(element).find('a').attr('href')
        // 각 item에서 여러개 태그 수집
        const tags = $(element).find('.tags .tag').map((i, el) => {
            return $(el).text();
        }).get();
        // 각 item에서 상세 페이지 수집
        // 1. 페이지 요청(비동기 처리) 2. 요청 페이지에 대해 파싱 후 텍스트 수집 
        const detailurl = `https://quotes.toscrape.com${authorUrl}`;
        const detailData = await fetchPage(detailurl); // 비동기 처리
        const $detail = cheerio.load(detailData);
        return {
            quote : quote,
            author : author,
            authorUrl : authorUrl,
            tags : tags,
            pageDetail : $detail('.author-details').text().trim()
        }
    }).get(); // .get() => jQuery 객체를 일반 배열로 변환

    // 모든 promise가 완료될 때까지 기다리기 
    // json 파일로 저장 
    const result =  Promise.all(quotes);
    return fs.writeFileSync('./quote.json', JSON.stringify(result));
    
}

// sleep 함수 정의
function sleep(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

// 페이지 바꾸면서 크롤링
async function crawlAllPages(){
    let idx = 1;
    let allData = [];
    let flag = true;
    do{
        // 페이지 로딩 
        const url = `https://quotes.toscrape.com/page/${idx}/`;
        const pageData = await fetchPage(url);
        
        if(idx !== 1) {flag = false};

        // 로딩 성공하면 데이터 수집 
        if (pageData) {
            console.log(`page loading success :: ${idx++}`);
            const quotes = await parseData(pageData);

            // 수집 데이터 없으면 종료
            if (quotes.length === 0) {
                flag = false;
            }else {
                allData = allData.concat(quotes);
                // 데이터 수집 후 1초간 sleep
                await sleep(1000);
            }
        } else{
            flag = false;
        }
    }while(flag);

    console.log(allData);
}

// start 
crawlAllPages();