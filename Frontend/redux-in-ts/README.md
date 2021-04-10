# Redux In TS
[notion 링크](https://www.notion.so/Redux-02ede9d86c4d42d98a189e7ea450f8f8)


## 프로젝트 목표
1. TS 환경에서 redux를 사용법을 익히기
2. redux의 미들웨어와 친숙해지고, 비동기 처리를 익히기 (`thunk`, `saga`)

## 예제 설명
1. `+`, `-` 기능과 input 태그를 이용해 숫자를 받아서 업데이트 할 수 있는 카운터
2. `axios` 패키지를 이용해서 영화 데이터를 fetch 한 뒤, 출력하는 무비 앱
    * 영화 API: https://yts.mx/api

---

## Study Notes

### TS 환경에서 redux 사용하기
1. 설치해야 하는 패키지
2. Start Using Redux
3. Create Modules (actions & reducers)
    - Original Method
    - Use `typesafe-actions`
4. useModule - Redux의 State와 Dispatch를 사용할 수 있게 해주는 Hook
    - Hook 만들기
    - 컴포넌트에서 Hook 사용하기

## Reference
- https://react.vlpt.us/using-typescript/