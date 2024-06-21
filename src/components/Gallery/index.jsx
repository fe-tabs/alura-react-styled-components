import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Photo from "./Photo";
import Popular from "./Popular";

const GalleryStyled = styled.div`
  display: flex;
`;

const GalleryContainer = styled.section`
  flex-grow: 1;
`;

const PhotosContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

const Gallery = ({ 
  photos = [], 
  setTag,
  onFavorite,
  onSelectedPhoto 
}) => {  
  return(
    <>
      <Tags setTag={setTag}/>

      <GalleryStyled>
        <GalleryContainer>
          <Title>Navegue pela galeria</Title>
          <PhotosContainer>
            {photos.map(photo => (
              <Photo
                photo={photo}
                key={photo.id}
                onExpand={onSelectedPhoto}
                onFavorite={onFavorite}
              />
            ))}
          </PhotosContainer>
        </GalleryContainer>

        <Popular/>
      </GalleryStyled>
    </>
  );
}

export default Gallery;