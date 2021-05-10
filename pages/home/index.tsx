import React from 'react'
import { Button } from 'components/button/Button'
import Image from 'next/image';
import { css } from '@emotion/react';
import styled from '@emotion/styled'

const landingImage = css`
    z-index:0;
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
               
               
            </div>
    )
}

export default Index
