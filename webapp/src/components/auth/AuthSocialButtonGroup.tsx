import React from 'react';
import styled from 'styled-components';
import AuthSocialButton from './AuthSocialButton';

function AuthSocialButtonGroup() {
  return (
    <AuthSocialGroupBlock>
      <AuthSocialButton provider="github" />
      <AuthSocialButton provider="google" />
      <AuthSocialButton provider="facebook" />
    </AuthSocialGroupBlock>
  );
}

const AuthSocialGroupBlock = styled.div`
  a:nth-child(2) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;

export default AuthSocialButtonGroup;
