import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
const ButtonStyle = css`
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: bolder;
  font-size: 1.125rem;
  background: black;
  color: white;
  cursor: pointer;
  &:hover {
    background: gray;
    color: black;
    transition: 1s;
  }
  ${(props) =>
    props.fullwidth &&
    css`
      padding: 0.3rem 0.5rem;
      width: 100%;
    `}
  ${(props) =>
    props.cyan &&
    css`
      background: cyan;
      &:hover {
        background: darkcyan;
        transition: 0.5s;
      }
    `}
    ${(props) =>
    props.margintop &&
    css`
      margin-top: 1rem;
    `}
`;
const StyledButton = styled.button`
  ${ButtonStyle}
`;
const StyledLink = styled(Link)`
  ${ButtonStyle}
`;
const Button = (props) => {
  // console.log({ ...props });
  return props.to ? (
    <StyledLink {...props}></StyledLink>
  ) : (
    <StyledButton {...props}></StyledButton>
  );

  // return <button></button>;
  // return props.to ? (
  //   <div {...props} cyan={props.cyan ? 1 : 0}></div>
  // ) : (
  //   <div {...props}></div>
  // );
};

export default Button;
