import React from "react";

function Label(props) {
  return (
    <label className={"font-medium text-gray-700 " + props.class} htmlFor={props.name}>
      {props.text}
    </label>
  );
}

export default Label;
