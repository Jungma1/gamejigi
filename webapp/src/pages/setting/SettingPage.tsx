import React from 'react';
import LeftSidebar from '../../components/common/LeftSidebar';
import Responsive from '../../components/common/Responsive';
import Setting from '../../components/setting/Setting';
import useAuth from '../../hooks/useAuth';

function SettingPage() {
  const { user } = useAuth();

  if (!user) {
    return <>로그인 해주세요!</>; // 수정 필요 (로그인 요청 컴포넌트)
  }

  return (
    <Responsive>
      <LeftSidebar />
      <Setting />
    </Responsive>
  );
}

export default SettingPage;
