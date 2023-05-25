import React from "react";
import styled from "styled-components";
import Button from "../lib/common/Button";
import { Link } from "react-router-dom";
type Props = { type: string };
const StyledInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid gray;
  font-size: 16px;
  padding: 0.5rem;
  width: 100%;
  cursor: pointer;
  & + & {
    margin-top: 1rem;
  }
  &:hover {
    background: lightgray;
    &::placeholder {
      color: black;
    }
  }
  &:focus {
    border-bottom: 2px solid purple;
  }
`;
const Footer = styled.div`
  text-align: right;
`;
const AuthForm: React.FC<Props> = ({ type = "login" }) => {
  const textMap: { [text: string]: string } = {
    login: "로그인",
    join: "회원가입",
  };
  const text = textMap[type];

  return (
    <form>
      <h3>{text}</h3>
      <StyledInput
        type="email"
        placeholder="input email"
        id="email"
        name="email"
      />
      {type === "join" ? (
        <StyledInput
          type="text"
          placeholder="input nick"
          id="nick"
          name="nick"
        />
      ) : undefined}
      <StyledInput
        type="password"
        placeholder="input password"
        id="password"
        name="password"
      />
      <Button fullwidth="true" cyan="true" margintop="true">
        {text}
      </Button>
      {type === "join" ? (
        <Footer>
          <Link to="/login">로그인</Link>
        </Footer>
      ) : (
        <Footer>
          <Link to="/join">회원가입</Link>
        </Footer>
      )}
      <Footer></Footer>
    </form>
  );
};

export default AuthForm;
