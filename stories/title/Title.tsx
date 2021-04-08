import React from 'react'
import { css } from '@emotion/react';

const fontTheme={
    montserrat:css`font-family: 'Montserrat', sans-serif;`,
    almendra:css`font-family: 'Almendra', serif;`,
    nanumgothic:css`font-family: 'Nanum Gothic', sans-serif;`
}

export interface TitleProps{
    font?:'montserrat'|'almendra'|'nanumgothic';
    size?:number;
    label:string;
}

export const Title = ({font='montserrat',size=102,label,...props}:TitleProps) => {
    return (
        <h1 
        css={[fontTheme[font]]}
        style={{fontSize:`${size}px`}}
        {...props}
        >
            {label}
        </h1>
    )
}

