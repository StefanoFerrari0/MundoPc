import React from 'react'

function MainTitle(props) {
    return (
        <h1 className={"text-6xl font-bold " + props.class}>{props.text}</h1>  
    );
  }

  export default MainTitle;