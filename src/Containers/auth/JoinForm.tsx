import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthForm from "../../Components/auth/AuthForm";
const JoinForm = () => {
  const dispatch = useDispatch();

  return <AuthForm type="join"></AuthForm>;
};

export default JoinForm;
