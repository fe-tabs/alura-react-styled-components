import { useState } from "react";
import { styled } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import photos from './data/photos.json';
import ModalZoom from "./components/ModalZoom";

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

  return (
    <BackgroundGradient>
      <GlobalStyle/>

      <AppContainer>
        <Header/>

        <MainContainer>
          <Sidebar/>
          
          <MainContent>
            <Banner/>
            <Gallery 
              photos={galleryPhotos}
              onSelectedPhoto={photo => setSelectedPhoto(photo)}
            />
          </MainContent>
        </MainContainer>
      </AppContainer>

      <ModalZoom 
        photo={selectedPhoto} 
        onSelectedPhoto={photo => setSelectedPhoto(photo)}
      />
    </BackgroundGradient>
  )
}

export default App
