import styled from "styled-components";

const BannerStyled = styled.div`
  background: url('/images/banner.png') no-repeat center;
  background-size: cover;
  height: 328px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  
  p {
    color: #FFF;
    width: 300px;
    font-family: 'GandhiSansRegular';
    font-size: 40px;
    margin: 0;
    padding: 0 80px;
  }
`;

const Banner = () => {
  return(
    <BannerStyled>
      <p>
        A galeria mais completa de fotos do espaço!
      </p>
    </BannerStyled>
  );
}

export default Banner;