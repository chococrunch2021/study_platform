import React from 'react'
import { css } from '@emotion/react';

const container=css`


`;

const globalNav=css``;

const globalNavLinks=css``;

const globalNavItem=css``;

function Home() {
    return (
        <div css={container}>
            <nav css={globalNav}>
                <div css={globalNavLinks}>
                    <a href="#" css={globalNavItem}>Rooms</a>
                    <a href="#" css={globalNavItem}>Ideas</a>
                    <a href="#" css={globalNavItem}>Stores</a>
                    <a href="#" css={globalNavItem}>Contact</a>
                </div>
            </nav>
            <nav className="localnav">
                <div className="local-nav-links">
                    <a href="#" className="productName">AirMug Pro</a>
                    <a href="#" className="productName">개요</a>
                    <a href="#" className="productName">제품 사양</a>
                    <a href="#" className="productName">구입하기</a>
                </div>
            </nav>
        </div>
    )
}

export default Home
