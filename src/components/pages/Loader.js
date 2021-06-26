import React from "react";

import "../../static/style/pages/loader.css";

function Loader() {
  return (
    <div className="container loader-holder">
      <div className="loader" />
      <div className="loader-text display-4 ml-4">Please Wait...</div>
    </div>
  );
}

export default Loader;
