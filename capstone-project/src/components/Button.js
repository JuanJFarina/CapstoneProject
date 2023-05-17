import React from "react";

const Button = (props) => {
    return (
      <div className="button clickable" onClick={props.handler}>{props.text}</div>
    );
}

export default Button;