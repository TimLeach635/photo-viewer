import React from "react";
import "./PhotoSelector.css";

export function PhotoSelector({ photoUrls, setCurrentPhotoUrl, currentPhotoUrl }) {
    return <div className="photo-selector">
        {photoUrls.map((url, index) => (
            <div className={`photo-selector__thumbnail ${currentPhotoUrl === url ? "selected" : ""}`} key={index} >
                <img
                    src={url}
                    alt="Thumbnail"
                    onClick={function() {
                        setCurrentPhotoUrl(url);
                    }} 
                />
            </div>
        ))}
    </div>
}
