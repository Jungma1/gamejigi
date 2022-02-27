import React from 'react';
import styled from 'styled-components';
import LeftSidebar from '../components/common/LeftSidebar';
import MainTemplate from '../components/common/MainTemplate';
import Responsive from '../components/common/Responsive';
import SettingProfile from '../components/setting/SettingProfile';
import SettingProfileEtc from '../components/setting/SettingProfileEtc';
import useAuth from '../hooks/useAuth';
import media from '../lib/styles/media';

function SettingPage() {
  const { user } = useAuth();

  if (!user) {
    return <>로그인 해주세요!</>; // 수정 필요 (로그인 요청 컴포넌트)
  }

  return (
    <Responsive>
      <MainTemplate>
        <LeftSidebar />
        <SettingResponsive>
          <main>
            <SettingProfile />
            <SettingProfileEtc />
          </main>
        </SettingResponsive>
      </MainTemplate>
    </Responsive>
  );
}

const SettingResponsive = styled.div`
  display: flex;
  flex: auto;

  main {
    width: 768px;
    margin-top: 6rem;
    margin-bottom: 6rem;
    margin-left: auto;
    margin-right: auto;

    ${media.small} {
      width: 100%;
    }
  }
`;

export default SettingPage;
