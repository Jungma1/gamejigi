import React from 'react';
import styled from 'styled-components';
import SettingProfile from './SettingProfile';

function Setting() {
  return (
    <Wrapper>
      <SettingProfile />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

export default Setting;
