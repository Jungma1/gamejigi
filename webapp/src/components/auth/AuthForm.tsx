import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import palette from '../../lib/styles/palette';
import AuthSocialButtonGroup from './AuthSocialButtonGroup';

function AuthForm() {
  const { modalVisible } = useAuth();

  return (
    <>
      <Background />
      <Wrapper>
        <BoxTemplate>
          <strong>환영합니다!</strong>
          <strong>원하는 로그인 방식을 선택하세요!</strong>
          <AuthSocialButtonGroup />
        </BoxTemplate>
      </Wrapper>
    </>
  );
}

const Background = styled.div`
  position: absolute;
  opacity: 0.7;
  background: black;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const BoxTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${palette.black};
  width: 320px;
  height: 200px;
  border-radius: 1rem;

  strong {
    :nth-child(2) {
      margin-bottom: 2rem;
    }
  }
`;

export default AuthForm;
