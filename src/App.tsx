import React from 'react';
import MainRouter from './routers/main';
import { HelmetProvider } from 'react-helmet-async';

function App() {


  return (
    <HelmetProvider >
      <MainRouter />
    </HelmetProvider>
  );
}

export default App;
