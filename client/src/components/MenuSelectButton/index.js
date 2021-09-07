import React, {useState} from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
// import API from "../../utils/API";

function MenuSelectButton({menuList, onSelectionChange, selectedMenu}) {

  const [value, setValue] = useState(selectedMenu);
  const [daypart, setDaypart] = useState('');
  // const [menuChange, setMenuChange]= useState([]);

  const handleSelect=(e)=>{
    console.log(e);
    setValue(e);
    onSelectionChange(e);
    const x = menuList.find(element => element.id === e);
    if(x)
    {
      setDaypart(x.daypart);
    }
  }
 
  console.log(menuList)

    return (
      <>
        <DropdownButton
          inline
          title="Select Menu"
          variant="info"
          id="dropdown-menu-right"
          className = "d-inline btn-lg"
          onSelect={handleSelect}
        >
          {menuList.map((i) =>
              <Dropdown.Item key={i.id} eventKey={i.id}>{i.daypart}</Dropdown.Item>
          )}
        </DropdownButton>
        <h3 className="d-inline ml-4"> &nbsp;{daypart} Menu</h3>
      </>
    )
};
export default MenuSelectButton;