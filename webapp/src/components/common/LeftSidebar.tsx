import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Logo } from '../../static/svg';

function LeftSidebar() {
  return (
    <Block>
      <TopStyled>
        <Logo />
        <div>겜지기</div>
      </TopStyled>
      <div>navbar</div>
      <div>setting</div>
    </Block>
  );
}

const Block = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${palette.black};
  border-left: 2px solid rgba(255, 255, 255, 0.5);
`;

const TopStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  font-size: 0.725rem;

  div {
    font-weight: bold;
    margin-top: 1rem;
  }
`;

export default LeftSidebar;
