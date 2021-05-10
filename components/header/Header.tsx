import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled'
import Link from 'next/link';
import {fontTheme} from 'components/theme/theme'

const flexStyles=css`
    width:100%;
    display:flex;
    align-items:center;
`;

const LinkBox=styled.li`
    ${flexStyles};
    width:50vw;
    margin-left:auto;
    justify-content:space-evenly;
    &> a{
        color:#fff;
        text-decoration:none;
    }
    &>a:hover{
        text-decoration:underline;
    }
    
`;

interface HeaderProps{
  font?:'montserrat'|'almendra'|'nanumgothic';
}

export const Header = ({
  font="montserrat",
    ...props
}: HeaderProps) => {

    return (
          <LinkBox {...props} css={[fontTheme[font]]}>
            <Link href="/">HOME</Link>
            <Link href="/login">LOG IN</Link>
            <Link href="/about">우쥬스터디란?</Link>
            <Link href="/contact">CONTACT US</Link>
          </LinkBox>
    );
  };


