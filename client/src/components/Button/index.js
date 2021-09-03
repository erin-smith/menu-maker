import React from "react";

function Button() {
    return (
<div className="dropdown d-inline">
    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
      Breakfast
    </button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Lunch</a>
      <a className="dropdown-item" href="#">Dinner</a>
    </div>
  </div>
    )
};
export default Button;