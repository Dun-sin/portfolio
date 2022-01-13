import React from "react";
import './ButtonMailto.css';
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <div className="mail">
      <Link
        to='#'
        onClick={(e) => {
          window.location = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    </div>
  );
};

export default ButtonMailto;