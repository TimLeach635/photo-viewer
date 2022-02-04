import React, { useState } from "react";
import { imageUrls } from "../imageUrls";
import { PhotoDisplayer } from "./PhotoDisplayer";
import { PhotoSelector } from "./PhotoSelector";
import "./PhotoViewer.css";

export function PhotoViewer() {
    const [currentPhotoUrl, setCurrentPhotoUrl] = useState(imageUrls[0]);

    return <div>
        <PhotoDisplayer currentPhotoUrl={currentPhotoUrl} />
        <PhotoSelector
            photoUrls={imageUrls}
            currentPhotoUrl={currentPhotoUrl}
            setCurrentPhotoUrl={setCurrentPhotoUrl}
        />
    </div>
}
