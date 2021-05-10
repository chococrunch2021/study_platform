import React from 'react'
import { Button } from 'components/button/Button'
import { Header } from 'components/header/Header';
import Image from 'next/image';
import { css } from '@emotion/react';

const landingImage = css`
    z-index:0;
`;
const elementStyle = css`
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
            {/* 배경 아닌 컴포넌트들 => element */}
            <section css={elementStyle}>
                <Header/>
            </section>
            </div>
          
    )
}

export default Index
