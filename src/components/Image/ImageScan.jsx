import React from 'react'
import { useState } from 'react';
import "./ImageScan.css"
const ImageScan = () => {

  const [file, setFile] = useState();
   
    const onFileChange = (e) =>{
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    };

    const proccesImage = () =>{
      console.log(file);
    }

  return (

    <><main id="main-content">
      <div className="grid-container padding-bottom-4">
        <div className="grid-row padding-4">
          <div className="desktop:grid-col-12" id="ContentDiv padding-bottom-3">
            <div className="grid-row padding-bottom-4 shoPageSection">
            <input type="file" onChange={onFileChange} />
            <div>
                <input type="button" value="submit" onClick={proccesImage} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default ImageScan