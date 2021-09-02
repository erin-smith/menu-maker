import React from "react";
import Button from "../Button";
import EditButton from "../EditButton";
import CattegoryButton from "../CategoryButton";

function Card() {
    return (
    <div className="container mt-5">
      <div className="card mb-4">
        <div className="card-header">
          <Button/>
         <p className="float-right d-inline">"Served Everyday: 6am - 11am" &nbsp; <span className = "d-inline"><EditButton/></span></p>
        </div>
        <div className="card-body">
          <ul className="card-text text-left mb-5">Entrees&nbsp;<a><i className="fas fa-plus-circle ml-3"></i></a>
          <li>Pancakes</li>
          <li>Crepes</li>
          </ul>
          <ul className="card-text text-left">Drinks&nbsp;<a><i className="fas fa-plus-circle ml-3"></i></a>
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