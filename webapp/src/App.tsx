import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthForm from './components/auth/AuthForm';
import useAuthEffect from './hooks/useAuthEffect';
import { GlobalStyled } from './lib/styles/GlobalStyled';
import HomePage from './pages/home/HomePage';

function App() {
  useAuthEffect();

  return (
    <>
      <GlobalStyled />
      <AuthForm />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
