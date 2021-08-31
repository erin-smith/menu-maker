import React from "react";

function Button() {
    return (
<div className="dropdown">
    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
      Daypart Menu
    </button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Breakfast</a>
      <a className="dropdown-item" href="#">Lunch</a>
      <a className="dropdown-item" href="#">Dinner</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Drinks</a>
    </div>
  </div>
    )
};
export default Button;