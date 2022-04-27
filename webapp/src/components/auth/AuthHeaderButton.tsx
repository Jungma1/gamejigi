import React from 'react';
import styled from 'styled-components';
import useAuth from './hooks/useAuth';
import palette from '../../lib/styles/palette';

function AuthHeaderButton() {
  const { user, handleClickLogout, handleChangeModalVisible } = useAuth();

  return (
    <Block onClick={user ? handleClickLogout : handleChangeModalVisible}>
      <span>{user ? '로그아웃' : '로그인'}</span>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: white;
  color: black;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  border-radius: 1rem;
  cursor: pointer;

  span {
    font-size: 0.75rem;
  }

  :hover {
    background: ${palette.gray0};
  }
`;

export default AuthHeaderButton;
