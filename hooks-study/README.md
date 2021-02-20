# Hooks Study


### [프로젝트 노트](https://www.notion.so/Functional-Component-72798547861443928cc6319485a725d6)

### Hooks의 기원

`acdlite/recompose` : Functional Component가 단순히 presenting만 하는(props를 받아서 jsx 형태에 맞게 렌더링되는) 기능에 국한 되지 않고, 클래스 컴포넌트처럼 State를 갖고 Life Cycle을 이용할 수 있도록 하는 유틸성 패키지 

개발자가 Facebook 팀으로 합류하게 되었고, 이후 React v.16.8. 에서 hook가 릴리즈 됨.

`useState`, `useEffect` 처럼 클래스형 컴포넌트를 대체할 수 있게 해준 hook를 포함해, 컴포넌트에 사용되는 기능들을 각각의 기능 단위로 함수화시킨 custom hooks를 만들 수 있게 됨으로써, React 개발 시 함수형 프로그래밍 개념을 적극적으로 사용할 수 있게 됨.

Class Component의 모든 기능을 Functional Component가 수행할 수 있게 됨으로써, 향후 React 팀의 포커스가 Functional Component 와 hook로 맞춰짐. (Class Component를 없앨 계획은 없다고 함)

참고자료 : [recompose 레포](https://github.com/acdlite/recompose)

.

---
## 1. React가 제공하는 Hooks
### [기초적인 Hooks (useState, useEffect)](https://www.notion.so/Hook-useState-useEffect-useContext-ce7f87d3d9cc4f2a98d90215ce45890d)
* useState: FC에서 클래스 컴포넌트의 state 객체와 동일한 기능을 수행할 수 있도록 해주는 hook
    ```typescript
    setCount(count + 1);
    setCount(prevCount => prevCount + 1);
    ```
    `setState` 함수는 인자로 state 값을 직접 넣을 수도 있고, callback 함수를 넣을 수 있다.

    이 콜백함수는 인자로 이전 state값을 받고, 다음 state 값을 리턴하는 함수이다.

* useEffect: FC가 Life Cycle을 사용할 수 있도록 해주는 hook

  ```typescript
  useEffect( effect[, deps] )
  // effect = 콜백 함수
  // deps = Dependency list (state, props)
  ```

  1) 렌더링 시 마다 Effect 실행

  ```typescript
  useEffect( () => { ... } )  // useEffect 인자로 콜백함수만 넘겨주기
  ```

  2) 특정 State 또는 Props 변경 시에만 Effect 실행

        ​	deps에 해당 인자를 넣어준다.

        ​	state, props 이외의 변수는 제대로 작동 안한다. DOM Element의 속성값이 변할 때마다 실행하는 방법을 아직 못 찾음 ㅠㅠ

  3) 첫 렌더링 시에만 실행 (=componentDidMount)

  ```typescript
  function UseEffectExample () {
      useEffect(() => { 
        window.addEventListener('resize', resizeHandler); 
      	  return () => { 
            window.removeEventListener('resize', resizeHandler) 
        } // Clean Up (componentWillUnmount)
      }, []) // deps에  빈 배열 넘겨주기: 첫 렌더링 이후 한 번만 실행하는 주문
  	...
  }
  ```
    **빈 배열 시 주의사항**

    useEffect 내에서 실행되는 함수이면 useEffect 내부에서 정의하거나, 밖에서 정의해야 하는 함수이면, useCallback화 한 다음 deps에 넣어줘야 함.

  4) Unmount 될 때 실행 (CleanUp)



### Reference
* [setState 관련 이화랑님 블로그 포스팅](https://leehwarang.github.io/2020/07/28/setState.html)
* [setState 관련 번역 문서](https://usecode.pw/functional-set-state-is-the-future-of-react/)
* [useEffect 관련 React 공식 문서](https://ko.reactjs.org/docs/hooks-effect.html)
* [useEffect 관련 gist 문서](https://gist.github.com/ninanung/0ea87bc3d14ed8b1f9e7488561a4b910)

.

### 성능 개선을 돕는 Memoization (useMemo, useCallback)

### Aditional Hooks (useReducer, useRef, useImparativeHandle, useLayoutEffect)


## 2. 실전형 Custom Hooks 
출처: [Nomad Coders 실전형 React Hooks 10개](https://nomadcoders.co/react-hooks-introduction)