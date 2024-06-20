import { styled } from "styled-components";
import { Normalize } from 'styled-normalize';

const BackgroundGradient = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244F 48%,
    #154580 96.76%
  );
  min-height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <BackgroundGradient>
      <Normalize/>
    </BackgroundGradient>
  )
}

export default App
