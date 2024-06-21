import styled from "styled-components";

const PhotoStyled = styled.figure`
  width: 448px;
  margin: 0;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  
  img {
    border-radius: 20px 20px 0 0;
  }
`;

const PhotoContent = styled.figcaption`
  background-color: #001634;
  color: #FFF;
  padding: 20px;
  border-radius: 0 0 20px 20px;
`;

const PhotoFooter = styled.footer`
  margin-top: 4px;
  display: grid;
  gap: 24px;
  grid-template-columns: auto 24px 24px;

  span {
    color: #D9D9D9;
  }

  img {
    height: 24px;
  }
`;

const Photo = ({ photo }) => {
  return(
    <PhotoStyled>
      <img src={photo.path} alt={photo.title}/>
      <PhotoContent>
        <strong>{photo.title}</strong>

        <PhotoFooter>
          <span>{photo.source}</span>
          <img src="/icons/favorite-inactive.png" alt="Favoritar"/>
          <img src="/icons/expand.png" alt="Expandir"/>
        </PhotoFooter>
      </PhotoContent>
  </PhotoStyled>
  );
}

export default Photo;