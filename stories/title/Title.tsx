import React from 'react'
import {fontTheme} from '@story/theme/theme'


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

