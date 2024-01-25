import axios from "axios";

const url = "https://naver.com";

// axios get 요청 1
// axios({
//     method: 'get',
//     url: 'url',
//     data: {
//         firstName: 'Fred',
//         lastName: 'Flintston'
//     },
//     headers:{},
//     params: {},
//     params: 'json' // document, json, text, strram
// }).then(response => {
//     console.log(response);
// })

// axios get 요청 2
// axios.get(url).then( response => {
//     return response.data;
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.error(error);
// })

// 비동기로 요청 
async function fetchPage() {
    const url = "https://www.naver.com";

    try {
        const response = await axios.get(url);
        console.log(response.data);
        
    } catch (error) {
        console.error(error);
    }
    
}

fetchPage();