import React from 'react';
import { Route, Routes } from 'react-router-dom';
import useUserLoader from './hooks/useUserLoader';
import { GlobalStyled } from './lib/styles/GlobalStyled';
import HomePage from './pages/home/HomePage';

function App() {
  useUserLoader();

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
