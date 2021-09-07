import React from "react";
import dessert from "../../images/breakfast4.jpeg"

function ImageUpload(){

return (
<div className="container">
    <div className ="row">
       <div className= "col-md-5">
<label forhtml="photo"/>
<img src={dessert} width="160px" height="160px"
className="d-inline" id="Img" 
/>
</div>
 <div className= "col-md-7">
<label className="d-inline text-center" forhtml="file">Upload photo:</label>
<input
  type="file"
  className="form-control-file d-inline"
  id="myFile"
  name="filename"
/>
<h6 className= "text-center"><strong>OR</strong></h6>
<label className="d-inline">Enter Photo URL:</label>
<input type="text" placeholder="https://imgur.com/a.jpg"
            //   onChange={handleInputChange}
              name="itemPhotoInput"
            //   value={myState["itemPhotoInput"]}
               ></input>
               <button className="btn btn-info m-2" type="Submit"
                // onClick={handleSubmit}
                >Submit</button>
</div>
</div>
</div>



)
}

export default ImageUpload;