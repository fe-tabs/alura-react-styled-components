import { styled } from 'styled-components';

const FooterStyled = styled.footer`
  background-color: #04244F;
  color: #FFF;
  width: 100%;
  font-size: 16px;
  margin-top: 100px;
  padding: 22px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
  }
`;

const IconsContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  
  li {
    display: inline-block;
    margin-right: 32px;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <IconsContainer>
        <li>
          <a href="#">
            <img src="/icons/social/facebook.svg" alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/icons/social/twitter.svg" alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/icons/social/instagram.svg" alt="Instagram" />
          </a>
        </li>
      </IconsContainer>

      <p>Desenvolvido com Alura</p>
    </FooterStyled>
  );
}

export default Footer;
