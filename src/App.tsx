
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Router, Route } from 'wouter';
import Index from './pages/Index';
import RecruiterDashboard from './pages/RecruiterDashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path="/" component={Index} />
        <Route path="/recruiter" component={RecruiterDashboard} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
