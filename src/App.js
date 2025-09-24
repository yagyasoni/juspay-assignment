import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { DashboardLayout } from '../src/components/DashboardLayout';
import { Dashboard } from '../src/components/Dashboard';
import { OrdersList } from '../src/components/OrdersList';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
    divider: '#e0e0e0',
  },
  typography: {
    fontFamily: 'Roboto',
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.875rem',
    },
    body2: {
      fontSize: '0.8125rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#bbdefb',
      dark: '#42a5f5',
    },
    secondary: {
      main: '#ce93d8',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
    divider: '#333333',
    action: {
      hover: 'rgba(255, 255, 255, 0.08)',
    },
  },
  typography: {
    fontFamily: "Roboto",
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.875rem',
    },
    body2: {
      fontSize: '0.8125rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
    console.log('Theme toggled to:', !isDarkMode ? 'dark' : 'light'); // Debug log
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'orders':
        return <OrdersList />;
      case 'dashboard':
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <DashboardLayout 
        currentView={currentView}
        onViewChange={setCurrentView}
        isDarkMode={isDarkMode}
        onToggleTheme={handleThemeToggle}
      >
        {renderCurrentView()}
      </DashboardLayout>
    </ThemeProvider>
  );
}