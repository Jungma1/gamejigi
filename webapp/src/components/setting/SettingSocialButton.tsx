import React from 'react';
import styled from 'styled-components';
import { FaceBookIcon, GithubIcon } from '../../static/svg';

function SettingSocialButton() {
  return (
    <Block>
      <GithubIcon />
      <FaceBookIcon />
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
`;

export default SettingSocialButton;
