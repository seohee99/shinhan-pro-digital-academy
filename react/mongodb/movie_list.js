import mongoose from "mongoose";
import axios from "axios";
import fs from "fs"

async function crawlWatcha(url){
    const response = await axios.get(url,{
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        "x-frograms-app-code": "Galaxy",
        "x-frograms-client": "Galaxy-Web-App",
        "x-frograms-version": "2.1.0",
      },
    }).then(function (response) {
        console.log(response.data.result.result)
        return response.data.result.result;
    }).catch((error) => {
      console.error(error);
    });

    return response;
}

async function watchaData(){
  let  promises = "";
  for(let idx = 1; idx < 6; idx++){
    const url = `https://pedia.watcha.com/api/staffmades/278/contents?page=${idx}&size=9`;
    promises = promises.concat(crawlWatcha(url));
  }

  const results = await Promise.all(promises);
  const movie_data = results.join('');
  fs.writeFileSync('./movie_list.json', JSON.stringify(movie_data));
}

watchaData();
