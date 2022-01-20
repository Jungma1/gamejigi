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
      <Top>
        <Logo />
        <div>GAMEJIGI</div>
      </Top>
      <Middle>
        <HomeIcon />
        <CalendarIcon />
        <PostIcon />
      </Middle>
      <Bottom>
        <SettingsIcon />
      </Bottom>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${palette.black};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  min-height: 100vh;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  div {
    font-size: 0.75rem;
    font-weight: bold;
    margin-top: 1rem;
  }
`;

const Middle = styled.div`
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

const Bottom = styled.div`
  margin-bottom: 2rem;

  svg {
    cursor: pointer;
  }
`;

export default LeftSidebar;
