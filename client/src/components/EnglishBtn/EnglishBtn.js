import React from "react";
import "./EnglishBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const EnglishBtn = props => (
  <span className="english-btn" {...props}>
    ✗
  </span>
);

export default EnglishBtn;