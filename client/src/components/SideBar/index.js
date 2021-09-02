import React from "react";

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "600px";
    document.getElementById("main").style.marginRight = "600px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
  }

function SideBar(){
    return(
        <>
        <div id="mySidebar" className="sidebar">
  <a href="javascript:void(0)" className="closebtn" onclick={closeNav()}>&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<div id="main">
  <button className="openbtn" onclick={openNav()}>&#9776; Open Sidebar</button>
  <h2>Collapsed Sidebar</h2>
  <p>Content...</p>
</div>
</>
    )
};

export default SideBar;