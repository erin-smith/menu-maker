import React, {useEffect, useState} from "react";
import API from "../../utils/API";

function MenuItem ({children, id, price, description, photo}) {
  return (
    <li key={id}>
    {children} -- {price}
  <p>
      <img src={photo} alt={children}/></p>
      <p>{description}</p>
  </li> 
  );
}

export default MenuItem;