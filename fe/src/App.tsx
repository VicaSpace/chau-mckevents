import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
