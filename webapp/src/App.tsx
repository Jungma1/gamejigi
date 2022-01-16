import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
      </Routes>
    </>
  );
}

export default App;
