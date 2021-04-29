# Redux In TS
[notion 링크](https://www.notion.so/Redux-02ede9d86c4d42d98a189e7ea450f8f8)


## 프로젝트 목표
1. TS 환경에서 redux를 사용법을 익히기
2. redux의 미들웨어와 친숙해지고, 비동기 처리를 익히기 (`thunk`, `saga`)

## 예제 설명
1. `+`, `-` 기능과 input 태그를 이용해 숫자를 받아서 업데이트 할 수 있는 카운터
2. fake posts api를 이용한 포스트 목록 및 디테일 페이지를 렌더링하는 게시판     <- 리팩토링 작업 실패
3. github api를 이용해서 유저이름을 입력하면 avatar_img와 bio를 제공하는 앱 
4. `axios` 패키지를 이용해서 영화 데이터를 fetch 한 뒤, 출력하는 무비 앱 
    * 영화 API: https://yts.mx/api

---

## Study Notes

### TS 환경에서 redux 사용하기
[Notion Link](https://www.notion.so/Redux-in-Typescript-5926c115a2454b18aaf446fe6ba75dc0)
1. 설치해야 하는 패키지
2. Start Using Redux
3. Create Modules (actions & reducers)
    - Original Method
    - Use `typesafe-actions`
4. useModule - Redux의 State와 Dispatch를 사용할 수 있게 해주는 Hook
    - Hook 만들기
    - 컴포넌트에서 Hook 사용하기

## Reference
- [Velopert님의 Mordern React - Redux in TS](https://react.vlpt.us/using-typescript/)
- [Velopert님의 Mordern React - Redux Middleware](https://react.vlpt.us/redux-middleware/)
- [Velopert님의 Mordern React - TS Redux Middleware](https://react.vlpt.us/using-typescript/06-ts-redux-middleware.html)