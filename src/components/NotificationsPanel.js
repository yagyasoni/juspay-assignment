import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  useTheme,
} from '@mui/material';
import {
  BugReport as BugIcon,
  PersonAdd as PersonAddIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const notifications = [
  {
    id: 1,
    icon: BugIcon,
    title: 'You have a bug that needs...',
    time: 'Just now',
    type: 'bug',
    color: '#f44336'
  },
  {
    id: 2,
    icon: PersonAddIcon,
    title: 'New user registered',
    time: '59 minutes ago',
    type: 'user',
    color: '#2196f3'
  },
  {
    id: 3,
    icon: BugIcon,
    title: 'You have a bug that needs...',
    time: '12 hours ago',
    type: 'bug',
    color: '#f44336'
  },
  {
    id: 4,
    icon: WarningIcon,
    title: 'Andi Lane subscribed to you',
    time: 'Today, 11:59 AM',
    type: 'subscription',
    color: '#ff9800'
  }
];

const activities = [
  {
    id: 1,
    user: 'You',
    action: 'have a bug that needs...',
    time: 'Just now',
    avatar: 'Y'
  },
  {
    id: 2,
    user: 'Released a new version',
    action: '',
    time: '59 minutes ago',
    avatar: 'R'
  },
  {
    id: 3,
    user: 'Submitted a bug',
    action: '',
    time: '12 hours ago',
    avatar: 'S'
  },
  {
    id: 4,
    user: 'Modified A data in Page X',
    action: '',
    time: 'Today, 11:59 AM',
    avatar: 'M'
  },
  {
    id: 5,
    user: 'Deleted a page in Project X',
    action: '',
    time: 'Feb 2, 2023',
    avatar: 'D'
  }
];

const contacts = [
  { name: 'Natali Craig', avatar: 'NC', status: 'online' },
  { name: 'Drew Cano', avatar: 'DC', status: 'offline' },
  { name: 'Orlando Diggs', avatar: 'OD', status: 'online' },
  { name: 'Andi Lane', avatar: 'AL', status: 'online' },
  { name: 'Kate Morrison', avatar: 'KM', status: 'offline' },
  { name: 'Koray Okumus', avatar: 'KO', status: 'online' }
];

export function NotificationsPanel() {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {/* Header */}
      <Box 
        sx={{ 
          padding: 3, 
          borderBottom: `1px solid ${theme.palette.divider}`,
          height: 64,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600,
            fontSize: '1rem',
            color: theme.palette.text.primary,
          }}
        >
          Notifications
        </Typography>
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        {/* Notifications */}
        <Box sx={{ padding: 2 }}>
          <List sx={{ padding: 0 }}>
            {notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <ListItem 
                  key={notification.id}
                  sx={{ 
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingTop: 1.5,
                    paddingBottom: 1.5,
                    borderRadius: 1,
                    marginBottom: 1,
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                    cursor: 'pointer'
                  }}
                >
                  <ListItemAvatar>
                    <Avatar 
                      sx={{ 
                        width: 32, 
                        height: 32,
                        backgroundColor: notification.color + '20',
                        color: notification.color
                      }}
                    >
                      <Icon fontSize="small" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontWeight: 500,
                          color: theme.palette.text.primary,
                          fontSize: '0.8125rem'
                        }}
                      >
                        {notification.title}
                      </Typography>
                    }
                    secondary={
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: theme.palette.text.secondary,
                          fontSize: '0.75rem',
                        }}
                      >
                        {notification.time}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Divider />

        {/* Activities */}
        <Box sx={{ padding: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              marginBottom: 2,
              fontSize: '1rem',
              color: theme.palette.text.primary,
            }}
          >
            Activities
          </Typography>
          <List sx={{ padding: 0 }}>
            {activities.map((activity) => (
              <ListItem key={activity.id} sx={{ paddingLeft: 0, paddingRight: 0, paddingTop: 1, paddingBottom: 1 }}>
                <ListItemAvatar>
                  <Avatar 
                    sx={{ 
                      width: 32, 
                      height: 32, 
                      backgroundColor: theme.palette.grey[300], 
                      fontSize: '0.75rem',
                      color: theme.palette.text.primary,
                    }}
                  >
                    {activity.avatar}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.primary,
                        fontSize: '0.8125rem'
                      }}
                    >
                      {activity.user} {activity.action}
                    </Typography>
                  }
                  secondary={
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: theme.palette.text.secondary,
                        fontSize: '0.75rem',
                      }}
                    >
                      {activity.time}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider />

        {/* Contacts */}
        <Box sx={{ padding: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              marginBottom: 2,
              fontSize: '1rem',
              color: theme.palette.text.primary,
            }}
          >
            Contacts
          </Typography>
          <List sx={{ padding: 0 }}>
            {contacts.map((contact) => (
              <ListItem 
                key={contact.name} 
                sx={{ 
                  paddingLeft: 2,
                  paddingRight: 2,
                  paddingTop: 1,
                  paddingBottom: 1,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                  cursor: 'pointer'
                }}
              >
                <ListItemAvatar>
                  <Box sx={{ position: 'relative' }}>
                    <Avatar 
                      sx={{ 
                        width: 32, 
                        height: 32, 
                        backgroundColor: theme.palette.grey[300], 
                        fontSize: '0.75rem',
                        color: theme.palette.text.primary,
                      }}
                    >
                      {contact.avatar}
                    </Avatar>
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: -2,
                        right: -2,
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        // backgroundColor: contact.status === 'online' ? '#4caf50' : '#bdbdbd',
                        border: `2px solid ${theme.palette.background.paper}`,
                      }}
                    />
                  </Box>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontWeight: 500,
                        color: theme.palette.text.primary,
                        fontSize: '0.8125rem'
                      }}
                    >
                      {contact.name}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}