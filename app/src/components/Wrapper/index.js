import React from "react";

function Wrapper(props) {
    // returning props.children allows us to return whatever components we place in this component
  return <div>{props.children}</div>;
}

export default Wrapper;
