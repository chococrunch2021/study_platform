import React from 'react';
import { css } from '@emotion/react';
import {sizeTheme} from 'components/theme/theme'
const button=css`
font-family: 'Almendra', serif;
font-weight:400;
cursor:pointer;
display:inline-block;
line-height:1;
border:none;
border-radius:10px;
`;

const buttonPrimary=css`
${button};
color:#fff;
background:#E0B973;
`;

const buttonSecondary=css`
${button};
color:#333;
background:transparent;
box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`;

export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
  }

export const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
  }:ButtonProps) => {
    const mode = primary ? buttonPrimary : buttonSecondary;
    return (
      <button
        type="button"
        css={[button, mode,sizeTheme[size]]}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    );
  };

  Button.defaultProps={
    background:"#E0B973"
  };

