import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

interface SettingInputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'ref' | 'as' | 'onChange'
  > {
  fullWidth?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SettingInput(props: SettingInputProps) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input<{ fullWidth?: boolean }>`
  background: ${palette.gray8};
  color: white;
  outline: none;
  border: 1px solid ${palette.gray6};
  border-radius: 3px;
  padding: 0.5rem 1rem;
  font-size: 1rem;

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;

export default SettingInput;
