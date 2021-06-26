import React from "react";

import "../../static/style/layout/scopeSwap.css";

function ScopeSwap(props) {
  const { swapPage, currScope } = props;

  return (
    <div className="row scope-btn-holder pt-5 pb-4">
      <div className="col-6">
        <button
          className={currScope === "global" ? "scope-btn-active" : "scope-btn"}
          onClick={() => {
            window.scrollTo(0, 600);
            swapPage();
          }}
        >
          GLOBAL
        </button>
      </div>
      <div className="col-6">
        <button
          className={currScope === "campus" ? "scope-btn-active" : "scope-btn"}
          onClick={() => {
            window.scrollTo(0, 600);
            swapPage();
          }}
        >
          YOUR CAMPUS
        </button>
      </div>
    </div>
  );
}

export default ScopeSwap;
