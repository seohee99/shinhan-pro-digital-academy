import instance from "./base";

export async function getUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    }
    return user;
}


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

export async function fetchBoard({boardId}) {
    try {
        const response = await instance.get(`/board/${boardId}`)
        console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }
}

export async function createBoard({ title, content }) {
    try {
        await getUser();
        const response = await instance.post('/board', {
            title,
            content
        })
    } catch (error) {
        console.error(error);
    }

}

export async function updateBoard({boardId,title, content}) {
    try {
        await getUser();
        const response = await instance.put(`/board/${boardId}`, {
            title,
            content
        })
    } catch (error) {
        console.error(error);
    }
}

export async function deleteBoard({boardId}) {
    try {
        await getUser();
        const response = await instance.delete(`/board/${boardId}`)
    } catch (error) {
        console.error(error);
    }
}

