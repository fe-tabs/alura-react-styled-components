import styled from "styled-components";
import Link from "./Link";

const LinkListStyled = styled.ul`
  width: 212px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Sidebar = () => {
  return(
    <aside>
      <nav>
        <LinkListStyled>
          <Link 
            href="/" 
            iconActive="icons/home-active.png" 
            iconInactive="icons/home-inactive.png"
            >Início</Link>
          <Link 
            href="" 
            iconActive="icons/mais-vistas-active.png" 
            iconInactive="icons/mais-vistas-inactive.png"
            >Mais vistas</Link>
          <Link 
            href="" 
            iconActive="icons/mais-curtidas-active.png" 
            iconInactive="icons/mais-curtidas-inactive.png"
            >Mais curtidas</Link>
          <Link 
            href="" 
            iconActive="icons/novas-active.png" 
            iconInactive="icons/novas-inactive.png"
            >Novas</Link>
          <Link 
            href="" 
            iconActive="icons/surpreenda-me-active.png" 
            iconInactive="icons/surpreenda-me-inactive.png"
            >Surpreenda-me</Link>
        </LinkListStyled>
      </nav>
    </aside>
  );
}

export default Sidebar;