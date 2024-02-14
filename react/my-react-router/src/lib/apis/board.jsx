import instance from "./base";


export async function fetchBoardList() {
    // 데이터 조회
    try {
        // base의 interceptor
        const response = await instance.get('/board')
        console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }
}

