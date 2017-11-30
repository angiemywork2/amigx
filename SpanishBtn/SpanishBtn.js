import React from "react";
import "./SpanishBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SpanishBtn = props => (
  <span onClick="props.onChangeLanguage" className="spanish-btn" {...props}>
    ✗
  </span>
);

export default SpanishBtn;