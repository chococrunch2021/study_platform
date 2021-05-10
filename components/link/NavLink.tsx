import Link from 'next/link'
import { css } from '@emotion/react'
import {fontTheme} from 'components/theme/theme'
export interface NavLinkProps{
    url:string;
    font?:'montserrat'|'almendra'|'nanumgothic';
    label:string;
    size?:number;
    color?:string;
}
const link=css`
font-family: 'Almendra', serif;
`;

export const NavLink = ({
    url="/",
    font="montserrat",
    label,
    size=25,
    color,
    ...props
}:NavLinkProps) => {
    return (
        <Link 
        href={`${url}`}
        {...props}>
            <a 
            css={[fontTheme[font]]}
            style={{fontSize:`${size}px`,color}}
             >{label}</a>
        </Link>
    )
}

NavLink.defaultProps={
    color:"#000"
}