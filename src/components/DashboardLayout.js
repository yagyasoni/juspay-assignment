import React, { useState } from 'react';
import { Box, Drawer, useTheme } from '@mui/material';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { NotificationsPanel } from './NotificationsPanel';

const DRAWER_WIDTH = 280;
const NOTIFICATIONS_WIDTH = 320;

export function DashboardLayout({ children, currentView, onViewChange, isDarkMode, onToggleTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const theme = useTheme();

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleToggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        height: '100vh', 
        backgroundColor: theme.palette.background.default 
      }}
    >
      {/* Sidebar */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={sidebarOpen}
        sx={{
          width: sidebarOpen ? DRAWER_WIDTH : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            borderRight: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <Sidebar 
          currentView={currentView}
          onViewChange={onViewChange}
          onToggleSidebar={handleToggleSidebar}
        />
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          })
        }}
      >
        {/* Header */}
        <Header 
          onToggleNotifications={handleToggleNotifications}
          onToggleTheme={onToggleTheme}
          isDarkMode={isDarkMode}
          notificationsOpen={notificationsOpen}
          onToggleSidebar={handleToggleSidebar}
          sidebarOpen={sidebarOpen}
        />
        <Box sx={{ 
          // flexGrow: 1, 
          padding: 3, 
          // overflow: 'auto',
          backgroundColor: theme.palette.background.default 
        }}>
          {children}
        </Box>
      </Box>

      {/* Notifications Panel */}
      <Drawer
        variant="persistent"
        anchor="right"
        open={notificationsOpen}
        sx={{
          width: notificationsOpen ? NOTIFICATIONS_WIDTH : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: NOTIFICATIONS_WIDTH,
            boxSizing: 'border-box',
            borderLeft: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <NotificationsPanel />
      </Drawer>
    </Box>
  );
}