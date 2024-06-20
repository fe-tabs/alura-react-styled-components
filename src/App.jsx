import { styled } from "styled-components";
import Header from "./components/Header";
import { GlobalStyle } from "./GlobalStyle";

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
      <GlobalStyle/>

      <Header/>
    </BackgroundGradient>
  )
}

export default App
