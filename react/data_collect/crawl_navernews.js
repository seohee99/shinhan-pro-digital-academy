import axios from "axios";
import * as cheerio from 'cheerio';


// 페이지 요청 함수
async function fetchPage(url){
    try {
        const response = await axios.get(url);
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
        // console.log(detailUrl)

        const detailData = await fetchPage(detailUrl);
        const $detail = cheerio.load(detailData).html();

        return {
            title : title,
            publish : publish,
            summary : summary,
            image : image,
            detailPage : $detail.replace(/[\n\t]+/g, ' ')
        }

        
    }).get();
    return Promise.all(news);
}

async function crawlNaverNews(){
    // let newsData = [];

    const keyword = "이차전지";
    const url = `https://search.naver.com/search.naver?where=news&sm=tab_jum&query=${keyword}`;

    const page = await fetchPage(url);
    if (page){
        const news = await parseData(page);
        // newsData = newsData.concat(news);
        console.log(news);
    }
}

crawlNaverNews();