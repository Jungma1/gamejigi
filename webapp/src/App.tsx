import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthForm from './components/auth/AuthForm';
import useAuthCheckUserEffect from './hooks/useAuthCheckUserEffect';
import { GlobalStyled } from './lib/styles/GlobalStyled';
import HomePage from './pages/home/HomePage';
import SettingsPage from './pages/settings/SettingsPage';

function App() {
  useAuthCheckUserEffect();

  return (
    <>
      <GlobalStyled />
      <AuthForm />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Routes>
    </>
  );
}

export default App;
