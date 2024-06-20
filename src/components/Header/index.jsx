import styled from "styled-components";
import TextField from "../TextField";

const HeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 212px;
  }
`;

const Header = () => {
  return(
    <HeaderStyled>
      <img src="/images/logo.png" alt="Vista da Terra do espaço"/>
    
      <TextField
        placeholder="O que você procura?"
      >
        <img src="/icons/search.svg" alt="Buscar"/>
      </TextField>
    </HeaderStyled>
  );
}

export default Header;