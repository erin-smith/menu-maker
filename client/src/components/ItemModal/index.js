import React from "react";

function ItemModal (){
    return(
<div className="container">
  <h2>Large Modal</h2>
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Open modal
  </button>
  <div className="modal fade" id="myModal">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal Heading</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>
    )
};

export default ItemModal;
