import React from 'react';

export default function Gallery({ photos, handlePhotoClick}) {
    return (
      <div className="gallery">
        {photos.map(photo => (
          <img
            key={photo.id}
            src={photo.url}
            alt={photo.title}
            onClick={() => handlePhotoClick(photo)}
          />
        ))}
      </div>
    );
  }