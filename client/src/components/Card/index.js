import React from "react";
import Button from "../Button";
import EditButton from "../EditButton";
import CategoryButton from "../CategoryButton";
import ItemButton from "../ItemButton";
import MenuList from "../MenuList";
import {Container, Row, Col } from "../Grid";


function Card (){

   

    return (
      <Container>
    <div className="container mt-5">
      <div className="card mb-4">
        <div className="card-header">
          <Button/>
         <p className="float-right d-inline">"Served Everyday: 6am - 11am" &nbsp; <span className = "d-inline"><EditButton/></span></p>
        </div>
        <div className="card-body">
          <Row>
        <div className="col-md-6">
         <MenuList/>
         </div>
         <div className="col-md-6">
          <CategoryButton/>
          <div className="mt-5"/>
          <ItemButton/>
          </div>
          </Row>
        </div>
      </div>
    </div>
    </Container>
    );
    };
    export default Card;