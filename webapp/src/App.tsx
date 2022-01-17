import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Redirect from './components/api/Redirect';
import useAuthEffect from './hooks/useAuthEffect';
import { GlobalStyled } from './lib/styles/GlobalStyled';
import HomePage from './pages/home/HomePage';

function App() {
  useAuthEffect();

  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/redirect' element={<Redirect />} />
      </Routes>
    </>
  );
}

export default App;
