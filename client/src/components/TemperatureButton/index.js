import React, { useState } from "react";

function TemperatureButton({temperature, onTemperatureChange}){

    const inactive = "btn btn-outline-primary";
    const active = "btn btn-outline-primary active";
    const allInactive = {
        hot:inactive,
        normal:inactive,
        cold:inactive
    }

    let initialState = JSON.parse(JSON.stringify(allInactive));
    initialState[temperature] = active;

    const [myTemperature, setMyTemperature] = useState(temperature);
    const [myState, setMyState] = useState(initialState);

    function selectTemperature(newTemperature){
        setMyTemperature(newTemperature)
        setMyState((prevState) => {
            let newState = JSON.parse(JSON.stringify(allInactive));
            newState[newTemperature] = active;
            return newState;
        })
    }

    function handleClick(e){
        const {name} = e.target;
        selectTemperature(name)
        onTemperatureChange(name);
    }
    
    return(
        <>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" name="hot" className={myState["hot"]} onClick={handleClick}>Hot</button>
                <button type="button" name="normal" className={myState["normal"]} onClick={handleClick}>Room Temperature</button>
                <button type="button" name="cold" className={myState["cold"]} onClick={handleClick}>Cold</button>
            </div>
        </>
    )
}

export default TemperatureButton;