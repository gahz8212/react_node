import { ActionType } from "typesafe-actions";
import { postData } from "../../api/postAPI";
import { AxiosError } from "axios";
import * as actions from "./actions";
export type PostAction = ActionType<typeof actions>;
export type PostState = {
  [key: string]: {} | null;
  loading: boolean;
  post: postData;
  posts: postData[] | null;
  error: AxiosError | null;
};
