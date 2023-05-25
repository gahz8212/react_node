import { createAsyncAction, createAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { postData } from "../../api/postAPI";
export const INITIALIZE_FORM = "post/INITIALIZE_FORM";
export const CHANGE_FIELD = "post/CHANGE_FIELD";
export const SELECT_IMAGE = "post/SELECT_IMAGE";
export const SELECT_IMAGE_SUCCESS = "post/SELECT_IMAGE_SUCCESS";
export const SELECT_IMAGE_FAILURE = "post/SELECT_IMAGE_FAILURE";
export const GET_POST_LIST = "post/GET_POST_LIST";
export const GET_POST_LIST_SUCCESS = "post/GET_POST_LIST_SUCCESS";
export const GET_POST_LIST_FAILURE = "post/GET_POST_LIST_FAILURE";

export const initializeForm = createAction(INITIALIZE_FORM, () => {})();
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}))();
export const selectImage = createAsyncAction(
  SELECT_IMAGE,
  SELECT_IMAGE_SUCCESS,
  SELECT_IMAGE_FAILURE
)<FormData, string[], AxiosError>();
export const getPostList = createAsyncAction(
  GET_POST_LIST,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE
)<undefined, postData[], AxiosError>();
