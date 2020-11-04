import React from "react";

function MainTitle(props) {
  return <h1 className={"xs:text-5xl md:text-5xl text-6xl font-bold " + props.class}>{props.text}</h1>;
}

export default MainTitle;
