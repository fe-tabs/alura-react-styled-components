import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import photos from './data/photos.json';
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";

const BackgroundGradient = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244F 48%,
    #154580 96.76%
  );
  min-height: 100vh;
  width: 100%;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width:100%;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
`;

const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

function App() {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);;
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [tag, setTag] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() =>{
    const filteredPhotos = photos.filter(photo => {
      const tagFilter = !tag || photo.tagId == tag;
      const searchFilter = !search || photo.title.toLowerCase().includes(
        search.toLowerCase()
      );
      
      return tagFilter && searchFilter;
    });

    setGalleryPhotos(filteredPhotos);
  }, [tag, search]);

  const onFavorite = (id) => {
    setGalleryPhotos(galleryPhotos.map(galleryPhoto => {
      if(selectedPhoto && galleryPhoto.id == selectedPhoto.id) {
        setSelectedPhoto({
          ...selectedPhoto,
          isFavorite: !selectedPhoto.isFavorite 
        })
      }

      return {
        ...galleryPhoto,
        isFavorite: galleryPhoto.id === id ? 
        !galleryPhoto.isFavorite : 
        galleryPhoto.isFavorite
      }
    }));
  }

  return (
    <BackgroundGradient>
      <GlobalStyle/>

      <AppContainer>
        <Header
          search={search}
          setSearch={setSearch}
        />

        <MainContainer>
          <Sidebar/>
          
          <MainContent>
            <Banner/>
            <Gallery 
              photos={galleryPhotos}
              onFavorite={onFavorite}
              setTag={setTag}
              onSelectedPhoto={photo => setSelectedPhoto(photo)}
            />
          </MainContent>
        </MainContainer>

      </AppContainer>
      <Footer/>

      <ModalZoom 
        photo={selectedPhoto} 
        onFavorite={onFavorite}
        onSelectedPhoto={photo => setSelectedPhoto(photo)}
      />
    </BackgroundGradient>
  )
}

export default App
