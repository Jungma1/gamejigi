import React from 'react';
import styled from 'styled-components';
import { useSetting } from '../../hooks/useSetting';
import palette from '../../lib/styles/palette';
import SettingProfileMode from './SettingProfileMode';

function SettingProfile() {
  const { mode, setMode } = useSetting();

  return (
    <Block>
      <ImageBox>
        <img src="img/profile.jpg" alt="profile" />
      </ImageBox>
      <SettingProfileMode mode={mode} setMode={setMode} />
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  height: 8rem;
  padding-top: 6rem;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
`;

const ImageBox = styled.div`
  padding-right: 2rem;
  border-right: 1px solid ${palette.gray700};

  img {
    display: block;
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
    object-fit: cover;
  }
`;

export default SettingProfile;
