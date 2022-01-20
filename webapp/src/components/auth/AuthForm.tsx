import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import palette from '../../lib/styles/palette';
import { CancelIcon } from '../../static/svg';
import AuthSocialButtonGroup from './AuthSocialButtonGroup';

function AuthForm() {
  const { modalVisible, handleChangeModalVisible } = useAuth();

  if (!modalVisible) return <></>;

  return (
    <>
      <Background />
      <Wrapper>
        <BoxTemplate>
          <CancelBlock>
            <CancelIcon onClick={handleChangeModalVisible} />
          </CancelBlock>
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
  align-items: center;
  flex-direction: column;
  background: ${palette.black};
  width: 320px;
  height: 200px;
  border-radius: 1rem;
  padding: 1rem;

  strong {
    :nth-child(3) {
      margin-bottom: 2rem;
    }
  }
`;

const CancelBlock = styled.div`
  align-self: flex-end;
  margin-bottom: 1.625rem;
  cursor: pointer;
`;

export default AuthForm;
