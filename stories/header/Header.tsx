import React from 'react';
import { css } from '@emotion/react';
import {sizeTheme} from '@story/theme/theme'
import styled from '@emotion/styled'
import Link from 'next/link';

const flexStyles=css`
    width:100%;
    display:flex;
    align-items:center;
`;

const Container=styled.nav`
    ${flexStyles};
    width:100%;
    height:70px;
    justify-content:flex-end;
`;

const LinkBox=styled.li`
    ${flexStyles};
    width:50vw;
    justify-content:space-evenly;
    &>a:hover{
        text-decoration:underline;
    }
`;


export interface HeaderProps {

}


export const Header = ({
    ...props
  }:HeaderProps) => {

    return (
      <Header {...props}>
          <LinkBox>
            <Link href="/">HOME</Link>
            <Link href="/login">LOG IN</Link>
            <Link href="/about">우쥬스터디란?</Link>
            <Link href="/contact">CONTACT US</Link>
          </LinkBox>
      </Header>
    );
  };


