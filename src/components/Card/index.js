import React from "react";
import Button from "../Button";
import EditButton from "../EditButton";
import CattegoryButton from "../CattegoryButton";

function Card() {
    return (
    <div className="container mt-5">
      <div className="card mb-4">
        <div className="card-header">
          <Button/>
         <p className="text-right">"Served Everyday: 11am - 2pm" &nbsp; <span><EditButton/></span></p>
        </div>
        <div className="card-body">
          <ul className="card-text text-left mb-5">Entrees&nbsp;<a><i class="fas fa-plus-circle ml-3"></i></a>
          <li>Pancakes</li>
          <li>Crepes</li>
          </ul>
          <ul className="card-text text-left">Drinks&nbsp;<a><i class="fas fa-plus-circle ml-3"></i></a>
          <li>Orange Juice</li>
          <li>Coffee</li>
          </ul>
          <CattegoryButton/>
        </div>
      </div>
    </div>
       )
    };
    export default Card;