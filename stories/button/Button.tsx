import React from 'react';
import { css } from '@emotion/react';

const button=css`
font-family: 'Almendra', serif;
font-weight:400;
cursor:pointer;
display:inline-block;
line-height:1;
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

const buttonSize = {
  small: css`
    font-size:12px;
    padding:10px 16px;
  `,
  medium: css`
  font-size:16px;
  padding: 11px 20px;
  `,
  large: css`
  font-size: 24px;
  padding: 12px 24px;
  `
};


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
        css={[button, mode,buttonSize[size]]}
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

