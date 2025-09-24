import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  NotificationsNone as NotificationsIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  Refresh as RefreshIcon,
  HelpOutline as HelpIcon,
  Fullscreen as FullscreenIcon,
  Folder as FolderIcon,
  Star as StarIcon,
} from '@mui/icons-material';

export function Header({ 
  onToggleNotifications, 
  onToggleTheme, 
  isDarkMode, 
  notificationsOpen,
  onToggleSidebar,
  sidebarOpen 
}) {
  const theme = useTheme();

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        color: theme.palette.text.primary,
        height: { xs: 'auto', sm: 64 }, // auto for stacked on xs
        paddingY: { xs: 1, sm: 0 },
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between', 
          paddingLeft: { xs: 1.5, sm: 3 },
          paddingRight: { xs: 1.5, sm: 3 },
          height: '100%',
          minHeight: '64px !important',
          flexWrap: { xs: 'wrap', sm: 'nowrap' }, // wrap on small screens
          gap: { xs: 1, sm: 0 },
        }}
      >
        {/* Left Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton 
            onClick={onToggleSidebar}
            sx={{ 
              color: theme.palette.text.secondary,
              padding: 1,
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          
          <Box 
            sx={{ 
              display: { xs: 'none', sm: 'flex' }, // hide breadcrumbs on mobile
              alignItems: 'center', 
              gap: { xs: 2, sm: 2 }
            }}
          >
            {/* <FolderIcon sx={{ color: theme.palette.text.secondary, fontSize: 16 }} /> */}
            <StarIcon sx={{ color: theme.palette.text.secondary}} fontSize="small"/>
            <Box sx={{display: 'flex',}}>     <Typography 
              variant="body2" 
              sx={{ 
                color: theme.palette.text.secondary,
                fontSize: '0.8125rem',
                marginLeft: 0.5,
                marginRight: 1,
              }}
            >
              Dashboards
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: theme.palette.text.primary, 
                fontWeight: 500,
                fontSize: '0.8125rem',
                marginLeft: 0.5,
              }}
            >
              / &nbsp; Default
            </Typography></Box>
            {/* <Typography 
              variant="body2" 
              sx={{ 
                color: theme.palette.text.secondary,
                fontSize: '0.8125rem',
                marginLeft: 0.5,
              }}
            >
              Dashboards
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: theme.palette.text.primary, 
                fontWeight: 500,
                fontSize: '0.8125rem',
                marginLeft: 0.5,
              }}
            >
              / Default
            </Typography> */}
          </Box>
        </Box>

        {/* Center Search */}
        <Box sx={{display: 'flex', flexDirection: 'row', gap: 1.5}}>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 1,
            backgroundColor: theme.palette.mode === 'dark' 
              ? alpha(theme.palette.grey[700], 0.3)
              : alpha(theme.palette.grey[300], 0.3),
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark' 
                ? alpha(theme.palette.grey[700], 0.4)
                : alpha(theme.palette.grey[300], 0.4),
            },
            marginLeft: { xs: 0, sm: 2 },
            flexGrow: { xs: 1, sm: 0 },
            width: { xs: '100%', sm: 'auto' },
            maxWidth: { xs: '100%', sm: 400 },
            height: 36,
            order: { xs: 3, sm: 2 }, // push search below on mobile
          }}
        >
          <Box
            sx={{
              padding: theme.spacing(0, 2),
              height: '100%',
              position: 'absolute',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SearchIcon sx={{ color: theme.palette.text.secondary, fontSize: 18 }} />
          </Box>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              color: 'inherit',
              width: '100%',
              '& .MuiInputBase-input': {
                padding: theme.spacing(1, 1, 1, 0),
                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create('width'),
                width: '100%',
                fontSize: '0.8125rem',
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: theme.palette.mode === 'dark' 
                ? alpha(theme.palette.grey[600], 0.4)
                : alpha(theme.palette.grey[400], 0.4),
              borderRadius: 0.5,
              padding: '2px 6px',
              fontSize: '0.7rem',
              color: theme.palette.text.secondary,
              fontFamily: 'monospace',
              display: { xs: 'none', sm: 'block' }, // hide shortcut hint on mobile
            }}
          >
            ⌘/
          </Box>
        </Box>

        {/* Right Section */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 0, sm: 0.5 },
            order: { xs: 2, sm: 3 }, // keep right section after left on mobile
            marginLeft: { xs: 'auto', sm: 0 },
          }}
        >
          <IconButton sx={{ color: theme.palette.text.secondary, padding: 1 }}>
            <RefreshIcon fontSize="small" />
          </IconButton>
          
          <IconButton sx={{ color: theme.palette.text.secondary, padding: 1 }}>
            <HelpIcon fontSize="small" />
          </IconButton>
          
          <IconButton 
            onClick={() => {
              console.log('Theme button clicked, current isDarkMode:', isDarkMode);
              onToggleTheme();
            }}
            sx={{ 
              color: theme.palette.text.secondary,
              padding: 1,
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            {isDarkMode ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
          </IconButton>
          
          <IconButton 
            onClick={onToggleNotifications}
            sx={{ 
              color: notificationsOpen ? theme.palette.primary.main : theme.palette.text.secondary,
              backgroundColor: notificationsOpen ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
              padding: 1,
              '&:hover': {
                backgroundColor: notificationsOpen 
                  ? alpha(theme.palette.primary.main, 0.2) 
                  : theme.palette.action.hover,
              },
            }}
          >
            <NotificationsIcon fontSize="small" />
          </IconButton>
          
          <IconButton sx={{ color: theme.palette.text.secondary, padding: 1 }}>
            <FullscreenIcon fontSize="small" />
          </IconButton>
        </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
