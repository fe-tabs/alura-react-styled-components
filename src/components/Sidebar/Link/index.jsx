import styled from "styled-components";

const LinkItemStyled = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 38px;
  
  a {
    color: ${ props => props.$isActive ? '#7B78E5' : '#D9D9D9' };
    width: 100%;
    font-family: ${ 
      props => props.$isActive ? 'GandhiSansBold' : 'GandhiSansRegular' 
    };
    cursor: pointer;
    text-decoration: none;
    display: flex;
    gap: 22px;
    align-items:Center;
  }
`;

const Link = ({ 
  href, 
  iconActive,
  iconInactive,
  children 
}) => {
  const isActive = href === window.location.pathname;

  return(
    <LinkItemStyled $isActive={isActive}>
      <a href={href}>
        <img src={isActive? iconActive : iconInactive} alt={children}/>
        {children}
      </a>
    </LinkItemStyled>
  );
}

export default Link;