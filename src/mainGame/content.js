//content.js
import React from "react";
import './content.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      ×
    </a>
    <div className="header"> Modal Title </div>
    <div className="content">
      {" "}
      Chuc ban may man lan sau !
    </div>
  </div>
);
