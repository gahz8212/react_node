import client from "./client";
export const selectImage = (data: FormData) => {
  return client.post("/post/image", data);
};
export const getPostList = () => {
  return client.get("/post/list");
};
export type postData = {
  id?: number;
  title: string;
  descript: string;
  price: number;
  images: string[];
};
