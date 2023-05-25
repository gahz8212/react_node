import React, { useState, useEffect, useRef } from "react";
import Form from "../../Components/post/Form";
import { useDispatch, useSelector } from "react-redux";

const FormContainer = () => {
  const dispatch = useDispatch();
  return <Form></Form>;
};

export default FormContainer;
