import { css } from '@emotion/react';
const sizeTheme = {
    small: css`
      font-size:12px;
      padding:10px 12px;
    `,
    medium: css`
    font-size:16px;
    padding: 11px 30px;
    `,
    large: css`
    font-size: 24px;
    padding: 12px 50px;
    `
  };

  const fontTheme={
    montserrat:css`font-family: 'Montserrat', sans-serif;`,
    almendra:css`font-family: 'Almendra', serif;`,
    nanumgothic:css`font-family: 'Nanum Gothic', sans-serif;`
}

  export {sizeTheme,fontTheme};