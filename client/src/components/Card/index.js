import React, {useState, useEffect} from "react";
// import API from "../../utils/API"
import Button from "../Button";
import EditButton from "../EditButton";
import CategoryButton from "../CategoryButton";
import ItemButton from "../ItemButton";
import { List, ListItem } from "../List";

// function Card (){
class Card extends React.Component {

  state = { menus: []};

  componentDidMount(){
    this.loadMenus();
  }

  loadMenus = () => {
    fetch("/api/menus")
    .then((response) => response.json())
    .then((menus) => this.setState({ menus }))
    .then((err) => {
      console.log(err, "here");
    });
};
render() {
  const { menus } = this.state;

  //  // Setting our component's initial state
  //  const [menus, setMenus] = useState([])
 
  //  // Load entrees and store them with menu1
  //  useEffect(() => {
  //    console.log("fetching");
  //    loadMenus()
  //  }, [])
 
  //  function loadMenus() {
  //    API.getMenus()
  //      .then(res => {
  //       console.log(res)
  //        setMenus(res.data)
  //      }
  //      )
  //      .catch(err => console.log(err, "Right here Error!!"));
  //  };
 
 

    return (
    <div className="container mt-5">
      <div className="card mb-4">
        <div className="card-header">
          <Button/>
         <p className="float-right d-inline">"Served Everyday: 6am - 11am" &nbsp; <span className = "d-inline"><EditButton/></span></p>
        </div>
        <div className="card-body">
        {menus.length ? (
              <List>
                {this.state.menus.map(({_id, menu}) => (
                    <ListItem key={_id}>
                      <a href={"/menus/" + _id}>
                         <p>{menu} {menu.categories.items.description} {menu.categories.items.photo}</p>
                        <p>{menu.categories.items.price}</p>
                      </a>
                    </ListItem>
                  ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          <CategoryButton/>
          <div className="mt-5"/>
          <ItemButton/>
        </div>
      </div>
    </div>
    );
    }
  };
    export default Card;