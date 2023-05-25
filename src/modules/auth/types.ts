import { ActionType } from "typesafe-actions";
import { authData } from "../../api/authAPI";
import * as actions from "./actions";
import { AxiosError } from "axios";
export type authAction = ActionType<typeof actions>;
export type authState = {
  [key: string]: {} | null;
  loading: boolean;
  auth: authData | null;
  error: AxiosError | null;
  login: authData;
  join: authData;
};
