import styled from "styled-components";

const TextFieldStyled = styled.div`
  height: 32px;
  width: 790px;
  padding: 16px 12px;
  position: relative;
  display: flex;
  align-items: center;

  div {
    height: calc(100% - 4px);
    position: absolute;
    top: 0;
    right: 0;
    bottom:0;
    left: 0;
    background: linear-gradient(to right, #C98CF1, #7B78E5);
    -webkit-mask: 
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0)
    ;
    -webkit-mask-composite: xor; /*5'*/
    mask-composite: exclude; /*5*/
    border: 2px solid transparent;
    border-radius: 10px;
    z-index: 0;
  }
  
  input {
    background: transparent;
    color: #D9D9D9;
    width: 100%;
    font-family: monospace;
    border: none;
    outline: none;
    z-index: 1;
  }
  
  img {
    height: 32px;
    z-index: 1;
  }
`;

const TextField = ({ 
  placeholder, 
  children 
}) => {
  return(
    <TextFieldStyled>
      <div></div>
      
      <input
        type="text"
        placeholder={placeholder}
      />

      {children}
    </TextFieldStyled>
  );
}

export default TextField