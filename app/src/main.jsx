import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import { Register } from '../src/pages/Register';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Register />
   </ThemeProvider>
  </React.StrictMode>,
)
