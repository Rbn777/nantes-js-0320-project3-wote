import { createGlobalStyle } from 'styled-components';
import Museo from '../fonts/Museo-500.otf';
import MuseoBold from '../fonts/Museo-900.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MuseoNormal';
    src: url(${Museo});
  }

  @font-face {
    font-family: 'MuseoBold';
    src: url(${MuseoBold});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body{
    --border-color: #b0afaf7d;
  }

  a {
    color: #f9f8f6;
  }
`;

export default GlobalStyle;
