import React from 'react';
import LeftSidebar from '../../components/common/LeftSidebar';
import Responsive from '../../components/common/Responsive';
import useAuthCallbackEffect from '../../hooks/useAuthCallbackEffect';
import { MainWrapper } from '../../lib/styles/MainWrapper';

function HomePage() {
  useAuthCallbackEffect();

  return (
    <Responsive>
      <MainWrapper>
        <LeftSidebar />
      </MainWrapper>
    </Responsive>
  );
}

export default HomePage;
