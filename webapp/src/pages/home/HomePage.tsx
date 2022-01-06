import React from 'react';
import AuthForm from '../../components/auth/AuthForm';
import LeftSidebar from '../../components/common/LeftSidebar';
import Responsive from '../../components/common/Responsive';

function HomePage() {
  return (
    <Responsive>
      <LeftSidebar />
      <AuthForm />
    </Responsive>
  );
}

export default HomePage;
