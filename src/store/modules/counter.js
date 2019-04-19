import { createAction, handleActions } from "redux-actions";

// 액션 타입을 정의해줍니다.
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const RESET = "counter/RESET";

// 액션 생성 함수를 만듭니다.
// 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다.
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const reset = createAction(RESET);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  number: 1
};

const _increment = ({ number }) => ({ number: number + 1 })
const _decrement = ({ number }) => ({ number: number - 1 })
const _reset = () => ({ number: 1 })

export default handleActions(
  // 첫번째 파라미터 : 액션을 처리하는 함수들
  {
    [INCREMENT]: _increment,
    [DECREMENT]: _decrement,
    [RESET]: _reset
  },
  // 두번째 파라미터 : 초기 상태
  initialState
);
