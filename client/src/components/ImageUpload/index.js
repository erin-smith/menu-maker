import React, {useState} from "react";
import dessert from "../../images/breakfast4.png";

function ImageUpload({data, onImageChanged}) {

    const [imgUrl, setImgUrl]= useState("");
    const [imgData, setImgData] = useState();
    
    function onImageChange(e){
        const file = e.target.files[0];
        if(file){
            readFile(file);
        }
    }
    function readFile(file) {                                                       
        var reader = new FileReader();
        reader.onload = readSuccess;                                            
        function readSuccess(evt) { 
            setImgData(evt.target.result);
            onImageChanged(evt.target.result);                            
        };
        reader.readAsDataURL(file);                                              
    } 

    function handleInputChange(event) {
        const { name, value } = event.target;
        setImgUrl(value);
      }

    function onLoadFromUrl(){
        console.log("loading ", imgUrl);
    }

    return (
    <div className="container">
        <div className="row">
        <div className="col-md-5">
            <label htmlFor="file" />
            {imgData ? (
                <img
                    src={imgData}
                    width="160px"
                    height="160px"
                    className="d-inline"
                    id="Img"
                />
            ):(
                <img
                    src={data? data : dessert}
                    width="160px"
                    height="160px"
                    className="d-inline"
                    id="Img"
                />
            )}
        </div>
        <div className="col-md-7">
            <label className="d-inline text-center" htmlFor="file">
                Upload photo:
            </label>
            <input
                type="file"
                className="form-control-file d-inline"
                id="image"
                onChange={onImageChange}
            />
            {/* <h6 className="text-center">
            <strong>OR</strong>
            </h6>
            <label className="d-inline">Enter Photo URL:</label>
            <input
                type="text"
                placeholder="https://imgur.com/a.jpg"
                onChange={handleInputChange}
                id="url"
            />
            <button
                className="btn btn-info m-2"
                type="Submit"
                onClick={onLoadFromUrl}
            >
                Load From Url
            </button> */}
        </div>
        </div>
    </div>
    );
}

export default ImageUpload;
