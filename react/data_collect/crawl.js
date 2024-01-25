import axios from "axios";
import * as cheerio from 'cheerio';

// 페이지 요청
async function fetchPage(){
    const url = "https://quotes.toscrape.com/";
    try {
        const response = await axios.get(url);
        console.log("success request");
        return response.data
    } catch (error) {
        console.error(error);
    }

}

// parsing
// 태그
// quote : .quote .text
// author : .quote .author
// authorUrl : .quote a

async function parseData(){
    const pageData = await fetchPage()

    if(pageData) {
        console.log("start data parsing");

        // parsing
        const $ = cheerio.load(pageData);
        const quotes = $('.quote').map((index, element) => {
            return {
                quote : $(element).find('.text').text().trim(),
                author : $(element).find('.author').text().trim(),
                authorUrl : $(element).find('a').prop('href'),
            }
        }).get();

        console.log(quotes);
    }
}

parseData();
