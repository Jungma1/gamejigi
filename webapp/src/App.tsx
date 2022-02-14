import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthForm from './components/auth/AuthForm';
import useAuthCheckUserEffect from './hooks/useAuthCheckUserEffect';
import { GlobalStyled } from './lib/styles/GlobalStyled';
import HomePage from './pages/home/HomePage';
import SettingPage from './pages/setting/SettingPage';

function App() {
  useAuthCheckUserEffect();

  return (
    <>
      <GlobalStyled />
      <AuthForm />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/setting' element={<SettingPage />} />
      </Routes>
    </>
  );
}

export default App;
