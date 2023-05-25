import React from "react";
import AuthForm from "../../Components/auth/AuthForm";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
const LoginForm = () => {
  const dispatch = useDispatch();
  const { login, auth } = useSelector((state: RootState) => ({
    login: state.auth.login,
    auth: state.auth.auth,
  }));
  return (
    <div>
      <AuthForm type="login"></AuthForm>
    </div>
  );
};

export default LoginForm;
