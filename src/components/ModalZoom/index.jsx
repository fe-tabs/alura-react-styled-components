import styled from "styled-components";
import Photo from "../Gallery/Photo"

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogStyled = styled.dialog`
  background: transparent;
  width: 1156px;
  position: absolute;
  top: 294px;
  border: none;
  
  form {
    width: 100%;
    display: flex;

    figure {
      width: 100%;
    }

    button {
      background: transparent;
      height: 32px;
      width: 32px;
      padding: 0;
      position: relative;
      top: 20px;
      right: 60px;
      border: none;
    }
  }
`;

const ModalZoom = ({ photo, onSelectedPhoto }) => {
  return (
    <>
      {photo && 
        <>
          <Overlay></Overlay>
          <DialogStyled open={!!photo}>
            <form method="dialog" onSubmit={() => onSelectedPhoto(null)}>
              <Photo photo={photo} isExpanded={true}/>
              <button type="submit">
                <img
                  src="/icons/close.png"
                  alt="Fechar"
                />
              </button>
            </form>
          </DialogStyled>
        </>
      }
    </>
  )
}

export default ModalZoom
