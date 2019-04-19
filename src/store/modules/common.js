import { createAction, handleActions } from "redux-actions";

const FETCH_ERROR = "common/FETCH_ERROR";
const FETCH_SUCCESS = "common/FETCH_SUCCESS";
const FETCH_LOADING = "common/FETCH_LOADING";

export const FETCH_ACTIONS = {
  FETCH_ERROR,
  FETCH_SUCCESS,
  FETCH_LOADING
}

export const fetchError = createAction(FETCH_ERROR);
export const fetchSuccess = createAction(FETCH_SUCCESS);
export const fetchLoading = createAction(FETCH_LOADING);

const initialState = {
  isLoding: false,
  isError: false,
  isSuccess: false
};

const _fetchError = (state) => {
  return { ...state, isLoding: false, isError: true }
}
const _fetchSuccess = (state) => {
  return { ...state, isLoding: false, isSuccess: true }
}
const _fetchLoading = (state) => {
  return { ...state, isLoding: true, isError: false }
}

export default handleActions(
  {
    [FETCH_ERROR]: _fetchError,
    [FETCH_SUCCESS]: _fetchSuccess,
    [FETCH_LOADING]: _fetchLoading
  },
  initialState
);