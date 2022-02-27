import React from 'react';
import LeftSidebar from '../components/common/LeftSidebar';
import MainTemplate from '../components/common/MainTemplate';
import Responsive from '../components/common/Responsive';
import useAuthCallbackEffect from '../hooks/useAuthCallbackEffect';

function HomePage() {
  useAuthCallbackEffect();

  return (
    <Responsive>
      <MainTemplate>
        <LeftSidebar />
      </MainTemplate>
    </Responsive>
  );
}

export default HomePage;
