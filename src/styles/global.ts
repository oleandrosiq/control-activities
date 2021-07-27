import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --violet: #5429cc;
    --red: #e52e40;
    --green: #33cc95;
    --orange: #ff7a29;
    --yellow: #FFCD1E ;
    
    --background: #121214;
    --white: #fff;

    --secondary: #e1e1e6;
    --text: #a8a8b3;
    --support: #737380;
    --shape: #202024;
    --shape-hover: #29292e;
    --icons: #41414d;
    --borders: #323238;
    --black: #09090a;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  
  body {
    background: var(--background);
    color: var(--white);
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;