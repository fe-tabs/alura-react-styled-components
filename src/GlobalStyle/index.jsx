import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

import GandhiSansRegular from './fonts/GandhiSans-Regular.otf';
import GandhiSansBold from './fonts/GandhiSans-Bold.otf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GandhiSansRegular';
    src: 
      local('Gandhi Sans Regular'), 
      local('GandhiSansRegular'), 
      url(${GandhiSansRegular})
    ;
  }

  @font-face {
    font-family: 'GandhiSansBold';
    src: 
      local('Gandhi Sans Bold'), 
      local('GandhiSansBold'), 
      url(${GandhiSansBold})
    ;
  }
  
  ${normalize}

  html {
    font-family: GandhiSansRegular;
  }
`;