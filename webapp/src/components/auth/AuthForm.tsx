import React from 'react';
import styled, { css } from 'styled-components';
import useAuth from './hooks/useAuth';
import palette from '../../lib/styles/palette';
import transitions from '../../lib/styles/transitions';
import { CancelIcon } from '../../static/svg';
import AuthSocialButtonGroup from './AuthSocialButtonGroup';

function AuthForm() {
  const { modalVisible, closed, handleChangeModalVisible } = useAuth();

  if (!modalVisible && !closed) return null;

  return (
    <>
      <Background />
      <Wrapper modalVisible={modalVisible}>
        <Box>
          <CancelBlock>
            <CancelIcon onClick={handleChangeModalVisible} />
          </CancelBlock>
          <div>환영합니다!</div>
          <div>원하는 로그인 방식을 선택하세요!</div>
          <AuthSocialButtonGroup />
        </Box>
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
  z-index: 1;
`;

const Wrapper = styled.div<{ modalVisible: boolean }>`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 2;
  ${(props) =>
    props.modalVisible
      ? css`
          animation: ${transitions.popInUp} 0.5s forwards ease-in-out;
        `
      : css`
          animation: ${transitions.popOutDown} 0.3s forwards ease-in-out;
        `}
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${palette.gray8};
  width: 320px;
  height: 200px;
  border-radius: 1rem;
  padding: 1rem;
  font-weight: bold;

  div {
    :nth-child(2) {
      font-size: 1.125rem;
      margin-bottom: 0.25rem;
    }
    :nth-child(3) {
      margin-bottom: 2rem;
    }
  }
`;

const CancelBlock = styled.div`
  align-self: flex-end;
  justify-self: flex-start;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

export default AuthForm;
