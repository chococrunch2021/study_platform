import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled'
import Link from 'next/link';

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

export const Header = ({
    ...props
  }) => {

    return (
          <LinkBox {...props}>
            <Link href="/">HOME</Link>
            <Link href="/login">LOG IN</Link>
            <Link href="/about">우쥬스터디란?</Link>
            <Link href="/contact">CONTACT US</Link>
          </LinkBox>
    );
  };


