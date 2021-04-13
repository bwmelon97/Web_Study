/* n 밀리세컨 동안 작업을 미루는 함수 */
const sleep = (n: number) => new Promise(resolve => setTimeout(resolve, n))

/* Post Type */
export type Post = {
    id: number;
    title: string;
    body: string;
}

/* 가짜 포스트 목록 데이터 */
const posts: Post[] = [
    {
        id: 1,
        title: '리덕스 미들웨어를 배워봅시다',
        body: '리덕스 미들웨어를 직접 만들어보면 이해하기 쉽죠.'
    },
    {
        id: 2,
        title: 'redux-thunk를 사용해봅시다',
        body: 'redux-thunk를 사용해서 비동기 작업을 처리해봅시다!'
    },
    {
        id: 3,
        title: 'redux-saga도 사용해봅시다',
        body:
            '나중엔 redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배워볼 거예요.'
    }
];

export const getPosts = async () => {
    await sleep(1000);
    return posts;
}

export const getPost = async (id: number) => {
    await sleep(1000);
    const post = posts.find(p => p.id === id);
    const EMPTY_POST: Post = {
        id: -1,
        title: 'No Title',
        body: '선택된 포스트가 없습니다.'
    } 
    return post ? post : EMPTY_POST;
}