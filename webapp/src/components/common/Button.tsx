import React from 'react';
import styled from 'styled-components';
import { buttonPaletteMap } from '../../lib/styles/palette';

type ButtonColorsType = 'green' | 'red' | 'gray';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color: ButtonColorsType;
  effect?: boolean;
}

function Button({ children, ...rest }: ButtonProps) {
  const props = rest as any;

  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button<{ color: ButtonColorsType }>`
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 3px;
  transition: background 0.3s;
  background: ${(props) => buttonPaletteMap[props.color].background};

  :hover {
    transition: background 0.3s;
    background: ${(props) => buttonPaletteMap[props.color].hoverBackground};
  }
`;

export default Button;
