# Study_React
리액트 공부 코드를 담은 레포


## Create React App으로 typescript 기반의 리액트 프로젝트 생성
```bash
$ npx create-react-app my-app --template typescript
```

## Typescript 프로젝트에서 패키지 설치하기
해당 패키지도 설치하고, 패키지 앞에 `@types/` 붙인 것도 설치하기 !!
```bash
$ yarn add styled-components & yarn add @types/styled-components
```

---

## Project List
* context api : React Context를 모듈화 시켜서 사용하는 방법에 대해 공부


---
## Study Plan
* hooks
  - useMemo, useCallback
  - useRef, useRedux
  - custom hooks
  - 실전형 React Hooks (Nomad Coder 강의)
* Redux
  - 미들웨어
  - 비동기 처리 (thunk, saga)
* CSS in JS
* SSR (Next.js)
* CRA 없이 React 프로젝트 만들기
  - Babel
  - Webpack
    - 모듈 import 시, src 경로 설정하기
* GraphQL + Apollo