import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';
import {
  CalendarIcon,
  HomeIcon,
  Logo,
  PostIcon,
  SettingsIcon,
} from '../../static/svg';
import AuthHeaderButton from '../auth/AuthHeaderButton';

function LeftSidebar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Block>
      <Template>
        <Top>
          <Logo onClick={() => navigate('/')} />
          <div>GAMEJIGI</div>
          <AuthHeaderButton />
        </Top>
        <Middle>
          <HomeIcon />
          <CalendarIcon />
          <PostIcon />
        </Middle>
        <Bottom>
          {user && <SettingsIcon onClick={() => navigate('/setting')} />}
        </Bottom>
      </Template>
    </Block>
  );
}

const Block = styled.aside`
  width: 6rem;
  z-index: 0;

  ${media.medium} {
    display: none;
  }
`;

const Template = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${palette.gray8};
  width: 6rem;
  height: 100%;
  position: fixed;

  svg {
    cursor: pointer;
  }
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
    :nth-child(2) {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

const Bottom = styled.div`
  margin-bottom: 2rem;
`;

export default LeftSidebar;
