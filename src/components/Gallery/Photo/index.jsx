import styled from "styled-components";

const PhotoStyled = styled.figure`
  width: 448px;
  margin: 0;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  
  & > img {
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
  display: flex;
  justify-content: space-between;

  span {
    color: #D9D9D9;
  }

  img {
    height: 24px;
    margin-left: 24px;
  
    &:nth-child(2) {
      display: ${props => props.$isExpanded ? 'none' : 'inline-block'};
    }
  }
`;

const Photo = ({ 
  photo, 
  isExpanded = false, 
  onExpand,
  onFavorite 
}) => {
  return(
    <PhotoStyled>
      <img src={photo.path} alt={photo.title}/>
      <PhotoContent>
        <strong>{photo.title}</strong>

        <PhotoFooter $isExpanded={isExpanded}>
          <span>{photo.source}</span>
          
          <div>
            <img 
              src={photo.isFavorite ? 
                "/icons/favorite-active.png" :
                "/icons/favorite-inactive.png"
              }
              alt={photo.isFavorite ? 
                "Remover dos Favoritos" :
                "Favoritar"
              }
              onClick={() => onFavorite(photo.id)}
            />
            <img
              src="/icons/expand.png"
              alt="Expandir"
              onClick={() => onExpand(photo)}
            />
          </div>
        </PhotoFooter>
      </PhotoContent>
  </PhotoStyled>
  );
}

export default Photo;