import React from "react";
import AuthTemplate from "../Components/auth/AuthTemplate";
import LoginForm from "../Containers/auth/LoginForm";
const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm></LoginForm>
    </AuthTemplate>
  );
};

export default LoginPage;
