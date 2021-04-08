import { css } from '@emotion/react'
import emotionReset from 'emotion-reset';
export const globalStyle=css`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Almendra:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
    ${emotionReset};
    
    html,
    body {
    padding: 0;
    margin: 0;
    font-family:'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    font-family:'Montserrat';
    outline:none;
    }

`;
