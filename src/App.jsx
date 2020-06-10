import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import ProjectRouter from './router/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ProjectRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
