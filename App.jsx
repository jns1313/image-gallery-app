import React, { useState, useEffect } from 'react'
import Search from './Components/Search'
import Tags from './Components/Tags'
import Gallery from './Components/Gallery'
import ImageViewer from './Components/ImageViewer'
import { apikey } from './Utils/apikey';

function App() {


  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const searchPhotos = async (query) => {
    let apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apikey}&format=json&nojsoncallback=1`;

    if (query) {
      apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&format=json&nojsoncallback=1`;
    }

    const resp = await fetch(apiUrl);
    const data = await resp.json();

    const photos = data.photos.photo.map(photo => ({
        id: photo.id,
        url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`,
        title: photo.title
    }))

    setPhotos(photos)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchPhotos(query)
  }

  const clickHandler = (e) => {
    console.log(e.target.textContent);
    setQuery(e.target.textContent);
  }

  useEffect(() => {
    searchPhotos();
  }, [])

  useEffect(() => {
    searchPhotos(query);
  }, [query]);

  function handlePhotoClick(photo) {
    setSelectedPhoto(photo);
  }

  function handleCloseViewer() {
    setSelectedPhoto(null);
  }
  
  return (
    <main>
      <h1>Captured Moments</h1>
      <Search handleSubmit={handleSubmit} query={query} setQuery={setQuery} />
      <Tags clickHandler={clickHandler} />
      <Gallery photos={photos} handlePhotoClick={handlePhotoClick} />
      {selectedPhoto && (
        <ImageViewer photo={selectedPhoto} onClose={handleCloseViewer} />
      )}
    </main>
  )
}

export default App
