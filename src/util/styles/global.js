import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; margin: 0; padding: 0}
  
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Raleway', sans-serif; 
        letter-spacing: 1px;
    }

    body {
        font-size: 12px;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2.25rem;
    }
`;
