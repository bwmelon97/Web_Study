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

  3) 첫 렌더링 후 1회만 실행 (=componentDidMount)

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

### [React의 렌더링 성능 최적화를 위한 Hooks (useMemo, useCallback)](https://www.notion.so/Memoization-Hooks-useMemo-useCallback-c436ddcffe124921b23279835eb6c1a6)

> **Memoization** : 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술

* useMemo
    ```typescript
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    ```

    **메모이제이션한 값**을 반환한다.

    첫 번째 인자는 create 함수. 특정한 값을 반환하는 함수이다.

    두 번째 인자는 dependency list. 해당 배열에 들어간 요소가 바뀔 때만 create 함수를 실행한다.

    `useMemo`에 인자로 들어가는 create 함수는 렌더링 시에 실행되는 함수이다.  렌더링 이후에 실행되어야 하는 기능 (side effects)는 `useEffect`에서 사용해야 한다.

* useCallback
    ```typescript
    const memoizedCallback = useCallback (
        () => { doSomething(a, b); },
        [a, b],
    );
    ```

    **메모이제이션 된 함수**를 반환한다.

    javascript에서 함수는 `Function` 객체이다. 따라서 callback 함수들은 렌더링 될 때마다 새로운 인스턴스를 생성하고, 이를 넘겨받는 컴포넌트는 같은 기능의 함수일지라도 다른 것으로 인식한다.

    그렇기에 `React.memo()` 등과 같은 최적화를 한 자식 컴포넌트에게 함수 props를 넘겨줄 때는 `useCallback`을 통해 성능을 향상시킬 수 있다.

  ### Reference
  * [이제는 사용해보자 useMemo, useCallback - 이화랑님 포스팅글](https://leehwarang.github.io/2020/05/02/useMemo&useCallback.html)
  * [React.memo() 현명하게 사용하기 번역문서](https://ui.toast.com/weekly-pick/ko_20190731)
  * [useMemo, useCallback 관련 리액트 공식문서](https://ko.reactjs.org/docs/hooks-reference.html#usememo)

.

### Aditional Hooks (useReducer, useRef, useImparativeHandle, useLayoutEffect)
* useRef
  ```typescript
  const refCount = useRef<number>(0);
  const InputEl = useRef<HTMLInputElement>(null);
  const configRef = useRef(config);   // config는 객체 데이터
  ```
  Use Refference Value. 즉, 객체를 사용하겠다는 hook이다. `useRef`가 반환하는 객체는 컴포넌트의 전 생애주기를 통해 유지된다. 해당 객체의 `current` 프로퍼티를 통해서 데이터에 접근할 수 있다.

  `useRef`는 `initialValue`를 인자로 필요로 하고, Generics를 이용해서 `current` 데이터의 타입을 설정할 수 있다.

  `useRef`는 State나 Props 변경에 의한 렌더링 시 초기화시키고 싶지 않은 변수, 그러나 해당 변수의 변화가 렌더링을 유도하지 않길 바라는 변수에 사용한다. 대표적인 사용처는 1) HTML DOM에 직접 접근하여 Element를 변수로 저장할 때와 2) `useEffect` 내부에 객체를 전달할 때 사용한다.

  ex1) HTML DOM에 직접 접근하여 Element를 변수로 저장
  ```typescript
  const InputEl = useRef<HTMLInputElement>(null);
  <input type='input' ref={InputEl} />

  /* 사용하기 */
  inputEl.current.?focus()  // 렌더링 이전 null일 경우에는 실행되지 않게 함.
                            // (Optional Chaining)
  ```
  ex2) `useEffect` 내부에 객체를 전달
  ```typescript
  function useAxios ( config: AxiosRequestConfig ) {
    const configRef = useRef(config);
    useEffect(() => {
      const { method } = configRef.current;
      switch ( method ) {
        case 'post': case 'POST':
          axios(configRef.current);
          break;
        ...
      }
    }, [])
  }
  ```

  ### Reference
  * [useRef 자세히 알아보기](https://krpeppermint100.medium.com/ts-useref-%EC%9E%90%EC%84%B8%ED%9E%88-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-typescript-uselayouteffect-c9f1cf02ca5a)  
  * [Object & array dependencies in the React useEffect Hook](https://www.benmvp.com/blog/object-array-dependencies-react-useEffect-hook/)

.

## 2. 실전형 Custom Hooks 
출처: [Nomad Coders 실전형 React Hooks 10개](https://nomadcoders.co/react-hooks-introduction)

React hook는 Functional Component가 Class Component의 기능을 수행할 수 있게 하기 위해 설계되었지만, **기능 단위의 로직을 함수 형태로 저장하여 재사용 가능**하다는 특성으로 그 잠재력은 Class Component 대체를 넘어서 코드를 '함수형 프로그래밍' 적으로 설계할 수 있도록 했다.

Nomad Coders의 클래스에서 소개된 웹 어플리케이션에서 자주 사용되는 12가지 기능을 각각 hook로 만들며 Typescript 환경에서 custom hook를 만드는 경험치를 쌓았다.

* useInput
* useTab
* useTitle
* useHover
* useConfirm, usePreventLeave
* useFadeIn
* useNetwork
* useScrollY
* useFullScreen
* useNotification
* useAxios

위에 있는 hook들은 npm 패키지로 배포했으며, 각각의 hook에 대한 설명과 인사이트는 [여기](https://www.notion.so/Nomad-Coder-Hooks-0b291ac9aed14f069c912e81ffcd6a12)서 확인할 수 있다.