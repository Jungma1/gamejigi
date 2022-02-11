import React from 'react';
import LeftSidebar from '../../components/common/LeftSidebar';
import Responsive from '../../components/common/Responsive';
import useAuthCallbackEffect from '../../hooks/useAuthCallbackEffect';

function HomePage() {
  useAuthCallbackEffect();
  
  return (
    <Responsive>
      <LeftSidebar />
    </Responsive>
  );
}

export default HomePage;
