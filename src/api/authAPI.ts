import client from "./client";
export const login = ({ email, password }: authData) => {
  return client.post("/login", { email, password });
};
export const join = ({ email, password, name, title }: authData) => {
  return client.post("/login", { email, password, name, title });
};
export type authData = {
  email: string;
  password: string;
  name?: string;
  title?: string;
};
