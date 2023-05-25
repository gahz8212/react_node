import { createReducer } from "typesafe-actions";
import { authState, authAction } from "./types";
import * as actions from "./actions";
const initialState: authState = {
  loading: false,
  auth: null,
  login: { email: "", password: "" },
  join: { email: "", password: "", name: "", title: "" },
  error: null,
};
const auth = createReducer<authState, authAction>(initialState, {
  [actions.INITIALIZE_FORM]: (state, { payload: form }) => ({
    ...state,
    [form]: initialState[form],
  }),
  [actions.CHANGE_FIELD]: (state, { payload: { form, key, value } }) => ({
    ...state,
    [form]: { ...state[form], [key]: value },
  }),
  [actions.LOGIN]: (state) => ({ ...state, loading: true }),
  [actions.LOGIN_SUCCESS]: (state, { payload: auth }) => ({
    ...state,
    loading: false,
    auth,
    error: null,
  }),
  [actions.LOGIN_FAILURE]: (state, { payload: error }) => ({
    ...state,
    loading: false,
    auth: null,
    error,
  }),
  [actions.JOIN]: (state) => ({ ...state, loading: true }),
  [actions.JOIN_SUCCESS]: (state) => ({
    ...state,
    loading: false,
    auth: null,
    error: null,
  }),
  [actions.JOIN_FAILURE]: (state, { payload: error }) => ({
    ...state,
    loading: false,
    auth: null,
    error,
  }),
});
export default auth;
