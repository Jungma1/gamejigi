import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import {
  CalendarIcon,
  HomeIcon,
  Logo,
  PostIcon,
  SettingsIcon,
} from '../../static/svg';

function LeftSidebar() {
  return (
    <Block>
      <StyledTop>
        <Logo />
        <div>GAMEJIGI</div>
      </StyledTop>
      <StyledMiddle>
        <HomeIcon />
        <CalendarIcon />
        <PostIcon />
      </StyledMiddle>
      <StyledBottom>
        <SettingsIcon />
      </StyledBottom>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${palette.black};
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  min-height: 100vh;
`;

const StyledTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  div {
    font-size: 0.725rem;
    font-weight: bold;
    margin-top: 1rem;
  }
`;

const StyledMiddle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 4rem;

  svg {
    cursor: pointer;

    :nth-child(2) {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

const StyledBottom = styled.div`
  margin-bottom: 2rem;
`;

export default LeftSidebar;
