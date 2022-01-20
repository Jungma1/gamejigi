import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import palette from '../../lib/styles/palette';

function AuthHeaderButton() {
  const { user, handleChangeModalVisible } = useAuth();

  if (!user) {
    return (
      <AuthHeaderButtonBlock onClick={handleChangeModalVisible}>
        <span>로그인</span>
      </AuthHeaderButtonBlock>
    );
  }

  return (
    <AuthHeaderButtonBlock>
      <span>내정보</span>
    </AuthHeaderButtonBlock>
  );
}

const AuthHeaderButtonBlock = styled.div`
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
    font-size: 0.875rem;
  }

  :hover {
    background: ${palette.gray2};
  }
`;

export default AuthHeaderButton;
