import React from "react";

function DietaryButton({data, onChange}){



    return(
        <>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                <label className="form-check-label" forhtml="inlineCheckbox1">Vegan</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                <label className="form-check-label" forhtml="inlineCheckbox2">Vegetarian</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                <label className="form-check-label" forhtml="inlineCheckbox3">Gluten Free</label>
            </div>
        </>
    )
}

export default DietaryButton;