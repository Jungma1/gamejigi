import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

interface SettingInputProps
  extends Omit<HTMLProps<HTMLInputElement>, 'ref' | 'as' | 'onChange'> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SettingInput(props: SettingInputProps) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input`
  background: ${palette.gray700};
  outline: none;
  border: 1px solid ${palette.gray500};
`;

export default SettingInput;
