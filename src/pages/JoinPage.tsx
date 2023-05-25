import React from "react";
import AuthTemplate from "../Components/auth/AuthTemplate";
import JoinForm from "../Containers/auth/JoinForm";
const JoinPage = () => {
  return (
    <AuthTemplate>
      <JoinForm></JoinForm>
    </AuthTemplate>
  );
};

export default JoinPage;
