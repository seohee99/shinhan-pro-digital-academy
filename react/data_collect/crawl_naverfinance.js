import axios from "axios";
import * as cheerio from 'cheerio';

async function fetchDailyPrice(url) {
  try {
    // header를 가지고 요청
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
      }
    });
    const html = response.data;
    const $ = cheerio.load(html);
    console.log($('strong').text())
    const tableRows = $("table.type2 tr");

    let dailyPrices = [];

    tableRows.each(function() {
      // 테이블의 각 row를 순회하면서 필요한 데이터 추출
      let row = $(this).find('td');
      if(row.length > 0){
        let date = $(row[0]).text().trim();
        let close = $(row[1]).text().trim();
        let volume = $(row[6]).text().trim();
        if(date) {
          dailyPrices.push({ date, close, volume });
        }
      }
    });
    return dailyPrices;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function crawlFinance() {
  const code = '005930'; // 삼성전자의 종목 코드
  // iframe src를 가져와야한다!
  // html의 network에서 iframe의 src에 요청을 보내야함 
  const url = `https://finance.naver.com/item/sise_day.naver?code=${code}`;
  const dailyPrices = await fetchDailyPrice(url);
  
  console.log(dailyPrices);
}

crawlFinance();
