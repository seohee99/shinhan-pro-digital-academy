# Express.js 최종 실습
React에서 활용할 서버 만들기
## 1. User Schema를 정의하여라.
- email
- password
- nickname
## 2. Auth 관련 API 구현
- /api/login (로그인)
- /api/signup (회원가입)
## 3. Board 스키마 구성
- title
- author (User를 참조하도록)
- content
- createdAt
- updatedAt
## 4. Board API 구성
- public
    - /api/board GET(보드리스트 조회)
    - /api/board/:boardId
- 로그인 필요
    - /api/board POST
    - /api/board/:boardId PUT
    - /api/board/:boardId DELETE
## 5. Comment 스키마 구성
- content
- author (User를 참조하도록)
- board (Board 참조하도록)
- createdAt
- updatedAt
<!-- 심화 -->
- 대댓글 가능하도록 (스키마 구성)
## 6. Comment API 구성하기
- /api/comment/?boardId=:boardId&page=1&size=10 GET (코멘트 조회)
- 로그인 필요 (로그인 된 유저만 가능)
    - /api/comment POST
    - /api/comment/:commendId PUT
    - /api/comment/:commendId DELETE
## 7. 리액트에서 부트스트랩 사용하여 페이지 구성하기
1. 회원가입 페이지
2. 로그인 페이지
3. 게시글 리스트 페이지