import Title from '../../Title';
import photos from '../../../data/popular.json';
import styled from 'styled-components';

const PhotosContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

const Image = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #FFF;
  width: 100%;
  font-size: 20px;
  margin-top: 16px;
  padding: 20px;
  cursor: pointer;
  border: 2px solid #C98CF1;
  border-radius: 10px;
`;

const Popular = ({}) => {
  return(
    <section>
      <Title $alignment="center">Populares</Title>

      <PhotosContainer>
        {photos.map(photo => (
          <Image key={photo.id} src={photo.path} alt={photo.alt}/>
        ))}
      </PhotosContainer>

      <Button>Ver mais</Button>  
    </section>
  );
}

export default Popular;