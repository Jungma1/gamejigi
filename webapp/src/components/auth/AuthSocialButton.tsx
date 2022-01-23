import React from 'react';
import styled from 'styled-components';
import { FaceBookIcon, GithubIcon, GoogleIcon } from '../../static/svg';

interface AuthSocialButtonProps {
  provider: 'google' | 'github' | 'facebook';
}

function AuthSocialButton({ provider }: AuthSocialButtonProps) {
  const host = process.env.REACT_APP_HOST;
  const providerIcons = {
    google: {
      icon: GoogleIcon,
      path: `${host}/api/auth/google`,
    },
    github: {
      icon: GithubIcon,
      path: `${host}/api/auth/github`,
    },
    facebook: {
      icon: FaceBookIcon,
      path: `${host}/api/auth/facebook`,
    },
  };

  const { icon: Icon, path } = providerIcons[provider];

  return (
    <Block href={path}>
      <Icon />
    </Block>
  );
}

const Block = styled.a``;

export default AuthSocialButton;
