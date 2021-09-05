import React, {useState} from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function Button() {

  const [value, setValue] = useState('');

  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }

  // if (value = "menu1"){

  // }
    return (
      <>
<DropdownButton
      inline
      title="Select Menu"
      variant="info"
      id="dropdown-menu-right"
      className = "d-inline"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="Breakfast">Breakfast</Dropdown.Item>
              <Dropdown.Item eventKey="Lunch">Lunch</Dropdown.Item>
              <Dropdown.Item eventKey="Dinner">Dinner</Dropdown.Item>
      </DropdownButton>
      <h3 className="d-inline"> &nbsp;{value}</h3>
      </>
    )
};
export default Button;