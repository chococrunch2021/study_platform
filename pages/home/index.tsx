import React from 'react'
import { Button } from 'components/button/Button'
import Image from 'next/image';
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



const landingImage = css`
    z-index:0;
`;
const buttonStyle = css`
    z-index:1;
    position:relative;
`;

function Index() {
    return (
        <div>
            <Image
                css={landingImage}
                src="/static/galaxy-bg.svg"
                alt="galaxy-bg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            ></Image>
            <section css={buttonStyle}>
                <LinkBox>
                <Link href="/">HOME</Link>
                <Link href="/login">LOG IN</Link>
                <Link href="/about">우쥬스터디란?</Link>
                <Link href="/contact">CONTACT US</Link>
                </LinkBox>
                <Button css={buttonStyle} label="test" primary></Button>
                <div style={{ color:"#fff"}}>test</div>
            </section>
            </div>
          
    )
}

export default Index
