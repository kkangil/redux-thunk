# react-redux-thunk

- 비동기 처리 redux-thunk 미들웨어를 사용해서 API 호출
- 로딩중, 에러 발생 관련 dispatch는 common 으로 따로 분리 시켜 놓음.
  - 해당 dispatch를 공통으로 사용하여 App.js 에서 한번만 컴포넌트를 불러주기 위해 사용
  - 모든 API call 하는 컴포넌트에서 각각 사용하는것은 효과적이지 않아보임.
  - 해당 방법이 옳은 방법인지는 알아봐야 하지만, 일단 코드 동작에는 이상없음.

- 참고 https://velopert.com/3401