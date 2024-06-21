import { styled } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";

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
      <Sidebar/>
      <Banner/>
    </BackgroundGradient>
  )
}

export default App
