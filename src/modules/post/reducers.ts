import { createReducer } from "typesafe-actions";
import { PostState, PostAction } from "./types";
import * as actions from "./actions";

const initialState: PostState = {
  loading: false,
  post: { title: "", descript: "", price: 0, images: [] },
  posts: null,
  error: null,
};
const post = createReducer<PostState, PostAction>(initialState, {
  [actions.INITIALIZE_FORM]: (state) => ({ ...state, initialState }),
  [actions.CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
  }),
  [actions.SELECT_IMAGE]: (state) => ({
    ...state,
    loading: true,
  }),
  [actions.SELECT_IMAGE_SUCCESS]: (state, { payload: images }) => ({
    ...state,
    post: { ...state.post, images },
    loading: false,
    posts: null,
  }),
  [actions.SELECT_IMAGE_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error,
    loading: false,
    posts: null,
  }),
  [actions.GET_POST_LIST]: (state) => ({
    ...state,
    loading: true,
  }),
  [actions.GET_POST_LIST_SUCCESS]: (state, { payload: posts }) => ({
    ...state,
    loading: false,
    posts,
  }),
  [actions.GET_POST_LIST_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error,
    loading: false,
    posts: null,
  }),
});
export default post;
