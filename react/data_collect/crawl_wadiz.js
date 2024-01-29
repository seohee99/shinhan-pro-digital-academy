import axios from "axios";
import * as cheerio from "cheerio";
import fetch from "node-fetch";
import fs from 'fs';


async function crawlWadiz(){
    const url = `https://service.wadiz.kr`;

    const response = await axios.post('https://service.wadiz.kr/api/search/funding', {
        startNum: 1, order: "recommend", limit: 48, categoryCode: "", endYn: ""
    })
        .then(function (response){
            const list = response.data.data['list'];
            console.log(list[0]['categoryName'])
        })
        .catch((error) => {
          console.error(error);
        });
}
crawlWadiz();
