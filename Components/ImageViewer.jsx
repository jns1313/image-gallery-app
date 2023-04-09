import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'
 
export default function ImageViewer({ photo, onClose }) {
    return (
      <div className="image-viewer">
        <div className="viewer-container">
            <img src={photo.url} alt={photo.title} className="viewer-image" />
        </div>
        <button onClick={onClose}>
          <AiOutlineClose className="close-btn" />
        </button>
      </div>
    );
  }