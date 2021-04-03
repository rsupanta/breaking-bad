import React from "react";
import Loader from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={Loader}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Loading"
    />
  );
};

export default Spinner;
