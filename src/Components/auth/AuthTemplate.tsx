import React from "react";
import { Link } from "react-router-dom";
import "./AuthTemplate.css";
type Props = {
  children: React.ReactNode;
};
const AuthTemplate: React.FC<Props> = ({ children }) => {
  return (
    <div className="AuthTemplateBlock">
      <div className="whiteBox">
        <Link to="/">
          <div className="logo-area">EUNKI</div>
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;
