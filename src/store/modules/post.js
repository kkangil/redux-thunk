import { handleActions } from 'redux-actions';

import PostActions from '../../actions/post'
import { FETCH_ACTIONS } from './common'

const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPost = postId => async dispatch => {
  try {
    dispatch({ type: FETCH_ACTIONS.FETCH_LOADING });
    const response = await PostActions.getPostAPI(postId)
    dispatch({ type: FETCH_ACTIONS.FETCH_SUCCESS });
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response
    })
  } catch (err) {
    dispatch({ type: GET_POST_ERROR })
    dispatch({ type: FETCH_ACTIONS.FETCH_ERROR, payload: err });
  }
}

const _getPostSuccess = (state, { payload }) => {
  const data = payload.data;

  return {
    ...state,
    data
  }
}

const _getPostError = state => {
  return {
    ...state,
    data: null
  }
}

const initialState = {
  data: null
}

export default handleActions({
  [GET_POST_SUCCESS]: _getPostSuccess,
  [GET_POST_ERROR]: _getPostError
}, initialState);