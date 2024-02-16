import instance from "./base";

export async function getUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    }
    return user;
}


export async function fetchCommentList({boardId}) {
    // 데이터 조회
    try {
        // base의 interceptor
        const response = await instance.get(`/comment/${boardId}`)
        console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }
}

export async function fetchComment({commentId}) {
    try {
        const response = await instance.get(`/comment/${commentId}`)
        console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }
}

export async function createComment({boardId, content }) {
    try {
        await getUser();
        const response = await instance.post('/comment', {
            boardId,
            content
        })
    } catch (error) {
        console.error(error);
    }

}

export async function updateComment({commentId, content}) {
    try {
        await getUser();
        const response = await instance.put(`/comment/${commentId}`, {
            content
        })
    } catch (error) {
        console.error(error);
    }
}

export async function deleteComment({commentId}) {
    try {
        await getUser();
        const response = await instance.delete(`/comment/${commentId}`)
    } catch (error) {
        console.error(error);
    }
}

