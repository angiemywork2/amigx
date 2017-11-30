import React from "react";
import "./EnglishBtn.css";


const EnglishBtn = props => (
  <span onClick={props.onChangeLanguage} className="english-btn" {...props}>
    ✗
  </span>
);

export default EnglishBtn;