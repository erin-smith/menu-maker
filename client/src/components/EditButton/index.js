import React, { useState } from "react";

function EditButton({onTimeChange, timeData}) {

    const [currentTime, setCurrentTime] = useState(timeData);
    const [isEditing, setIsEditing] = useState(false);

    function changeTime(event){
        let { value } = event.target;
        setCurrentTime(value);
    }
    function onSave(){
      setIsEditing(false);
      onTimeChange(currentTime);
    }
    function onCancel(){
        setIsEditing(false);
        setCurrentTime(timeData);
    }

    function onEdit(){
        setIsEditing(true);
        setCurrentTime(timeData);
    }
    
    return (
    <>    
    { isEditing ? (
        <div className="row">
            <div className="col-md-4 mb-3">
                <input 
                    value={currentTime}
                    onChange={changeTime} 
                    name="time" 
                    className="form-control" 
                    placeholder="Served Daily: 6am-11am" 
                    id="ex3" 
                    type="text"/>
            </div>
            <div className="col">
                <div>
                    <button  onClick={onSave} className="btn btn-info mr-3" type="button" id="button-addon2"> Save New Time</button>
                    <button  onClick={onCancel} className="btn btn-warning" type="button" id="button-addon2"> Cancel</button>
                </div>
            </div>
        </div>
    ):(
        <div className="row">
            <div className="col-md-4 mb-3">
                <input 
                    value={timeData}
                    name="time" 
                    className="form-control" 
                    placeholder="no time specified" 
                    readOnly
                    id="ex3" 
                    type="text"/>
            </div>
            <div className="col">
                <div>
                    <button onClick={onEdit} className="btn btn-info" type="button" id="button-addon2">Edit</button>
                </div>
            </div>
        </div>
    )}
    </>
    );
}
export default EditButton;