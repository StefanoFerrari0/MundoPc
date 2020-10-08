import React from 'react'

function MainTitle(props) {
    return (
        <h3 className={"text-2xl font-light pt-2 " + props.class }>{props.text}</h3>  
    );
  }

  export default MainTitle;