import React from "react";
import "./PhotoDisplayer.css";

export function PhotoDisplayer({ currentPhotoUrl }) {
    return <div className="photo-display">
        <img src={currentPhotoUrl} alt="Main" />
    </div>
}
