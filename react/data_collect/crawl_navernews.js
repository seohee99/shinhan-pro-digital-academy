import axios from "axios";
import * as cheerio from 'cheerio';
import fs from "fs";
import http from "http";
import https from "https";

// sleep 함수 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 페이지 요청 함수
async function fetchPage(url){
    try {
        const response = await axios.get(url, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            },
            // 3초 내에 응답 오지 않으면 요청 중단
            timeout:3000,
            httpAgent: new http.Agent({keepAlive:true}),
            httspAgent: new https.Agent({keepAlive:true}),
          });
        console.log(`success request :: ${url}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}


// content : .news_area
// title : a.news_tit
// publish : a.info.press
// summary : a.api_txt_lines.dsc_txt_wrap
// image : a.dsc_thumb > img
async function parseData(data){

    const $ = cheerio.load(data);

    const news = $('.news_area').map(async (i, element) => {

        const title = $(element).find('a.news_tit').text().trim();
        const publish = $(element).find('a.info.press').text().trim();
        const summary = $(element).find('a.api_txt_lines.dsc_txt_wrap').text().trim();
        const image = $(element).find('a.dsc_thumb img').prop('data-lazysrc') || '';

        const detailUrl = $(element).find('a.news_tit').prop('href');

        const detailData = await fetchPage(detailUrl);
        const $detail = cheerio.load(detailData).html();

        // 이미지를 img 폴더에 저장
        if(image.length > 0){
            const imgData = await axios.get(image, {
                responseType: 'arraybuffer'
            });
            const imgPath = `img/${idx++}.jpg`
            fs.writeFileSync(imgPath, imgData.data);

        }

        await sleep(2000); 

        return {
            title : title,
            publish : publish,
            summary : summary,
            image : image,
            if(imgPath){
                imgPath : imgPath
            },
            detailPage : $detail.replace(/[\n\t]+/g, ' ')

        }

        
    }).get();
    return Promise.all(news);
}

let idx = 0;
async function crawlNaverNews(){
    // let newsData = [];

    const keyword = "이차전지";
    const url = `https://search.naver.com/search.naver?where=news&sm=tab_jum&query=${keyword}`;

    const page = await fetchPage(url);
    if (page.length > 0){
        const news = await parseData(page);
        console.log(news);

        // JSON형태로 파일에 저장
        fs.writeFileSync("naver_news.json",JSON.stringify(news));
    }
}

crawlNaverNews();