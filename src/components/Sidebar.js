import React, { useState, useEffect, useMemo } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  useTheme,
  Collapse,
} from '@mui/material';
import {
  Home as HomeIcon,
  Folder as FolderIcon,
  ShoppingCart as ShoppingCartIcon,
  Description as DescriptionIcon,
  People as PeopleIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Business as BusinessIcon,
  MenuBook as MenuBookIcon,
  Chat as ChatIcon,
  Dashboard as DashboardIcon,
  School as SchoolIcon,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';

/* =======================
   KEEP THESE ARRAYS INTACT
   (variable names & view strings unchanged)
   ======================= */

const favoriteItems = [
  { icon: HomeIcon, label: 'Overview', view: 'dashboard' },
  { icon: FolderIcon, label: 'Projects', view: 'projects' },
];

const recentlyItems = [];

const dashboardItems = [
  { icon: DashboardIcon, label: 'Default', view: 'default' },
  { icon: ShoppingCartIcon, label: 'eCommerce', view: 'dashboard' },
  { icon: DescriptionIcon, label: 'Order List', view: 'orders' }, // untouched
  { icon: FolderIcon, label: 'Projects', view: 'projects' },
  { icon: SchoolIcon, label: 'Online Courses', view: 'courses' },
];

// Pages → User Profile subitems (kept names & views)
const userProfileSubItems = [
  { icon: HomeIcon, label: 'Overview', view: 'overview' },
  { icon: FolderIcon, label: 'Projects', view: 'projects' },
  { icon: DescriptionIcon, label: 'Campaigns', view: 'campaigns' },
  { icon: DescriptionIcon, label: 'Documents', view: 'documents' },
  { icon: PeopleIcon, label: 'Followers', view: 'followers' },
];

const pageItems = [
  { icon: PersonIcon, label: 'User Profile', view: 'profile', children: userProfileSubItems },
  { icon: SettingsIcon, label: 'Account', view: 'account' },
  { icon: BusinessIcon, label: 'Corporate', view: 'corporate' },
  { icon: MenuBookIcon, label: 'Blog', view: 'blog' },
  { icon: ChatIcon, label: 'Social', view: 'social' },
];

/* =======================
   NavigationSection
   - Renders items for a single section (Favorites, Dashboards, Pages...)
   - Uses the provided `sectionId` to compute stable keys for items
   - Uses `selectedKey` to decide which single entry is active
   - Calls `onSelectKey(key, item)` when an item is clicked (so Sidebar keeps the canonical selected key)
   ======================= */

function NavigationSection({
  title,
  items,
  currentView,      // kept for compatibility (not used for determining active styling)
  onViewChange,
  theme,
  sectionId,        // new: a stable id for this section (e.g., 'fav', 'dash', 'page')
  selectedKey,      // which unique key is currently selected
  onSelectKey,      // callback to set the selected key in parent Sidebar
  openMenus,        // object: { [label]: boolean } controlling collapsed groups
  onToggleMenu,     // function(label) to toggle a group's open state in parent
}) {
  return (
    <Box sx={{ marginBottom: 3 }}>
      <Typography
        variant="caption"
        sx={{
          paddingLeft: 3,
          paddingRight: 3,
          paddingTop: 1,
          paddingBottom: 1,
          color: theme.palette.text.secondary,
          textTransform: 'uppercase',
          letterSpacing: 0.5,
          fontWeight: 500,
          fontSize: '0.6875rem',
          display: 'block',
        }}
      >
        {title}
      </Typography>

      <List sx={{ padding: 0 }}>
        {items.map((item, index) => {
          const Icon = item.icon;
          const itemKey = `${sectionId}-${index}`; // stable unique key for top-level item

          // If item has children (e.g., User Profile)
          if (item.children) {
            const isActiveParent = selectedKey === itemKey;
            const isOpen = !!openMenus[item.label];

            return (
              <React.Fragment key={itemKey}>
                <ListItem sx={{ paddingLeft: 2, paddingRight: 2, paddingTop: 0, paddingBottom: 0 }}>
                  <ListItemButton
                    onClick={() => {
                      // Toggle open/closed for the group
                      onToggleMenu && onToggleMenu(item.label);
                      // Set local selectedKey to this parent key (keeps only one active)
                      onSelectKey && onSelectKey(itemKey, item);
                    }}
                    sx={{
                      borderRadius: 1,
                      marginBottom: 0.5,
                      paddingTop: 1,
                      paddingBottom: 1,
                      paddingLeft: 1.5,
                      paddingRight: 1.5,
                      backgroundColor: isActiveParent ? theme.palette.primary.main : 'transparent',
                      color: isActiveParent ? theme.palette.primary.contrastText : theme.palette.text.primary,
                      '&:hover': {
                        backgroundColor: isActiveParent ? theme.palette.primary.dark : theme.palette.action.hover,
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 32, color: isActiveParent ? theme.palette.primary.contrastText : theme.palette.text.secondary }}>
                      <Icon fontSize="small" />
                    </ListItemIcon>

                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: '0.8125rem', fontWeight: isActiveParent ? 500 : 400 }}
                    />

                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>

                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child, childIndex) => {
                      const ChildIcon = child.icon;
                      const childKey = `${sectionId}-${index}-child-${childIndex}`;
                      const isChildActive = selectedKey === childKey;

                      return (
                        <ListItem key={childKey} sx={{ pl: 6, pr: 2, pt: 0, pb: 0 }}>
                          <ListItemButton
                            onClick={() => {
                              onSelectKey && onSelectKey(childKey, child);
                              onViewChange && onViewChange(child.view);
                            }}
                            sx={{
                              borderRadius: 1,
                              marginBottom: 0.5,
                              paddingTop: 1,
                              paddingBottom: 1,
                              paddingLeft: 1.5,
                              paddingRight: 1.5,
                              backgroundColor: isChildActive ? theme.palette.primary.main : 'transparent',
                              color: isChildActive ? theme.palette.primary.contrastText : theme.palette.text.primary,
                              '&:hover': {
                                backgroundColor: isChildActive ? theme.palette.primary.dark : theme.palette.action.hover,
                              },
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 32, color: isChildActive ? theme.palette.primary.contrastText : theme.palette.text.secondary }}>
                              <ChildIcon fontSize="small" />
                            </ListItemIcon>

                            <ListItemText
                              primary={child.label}
                              primaryTypographyProps={{ fontSize: '0.8125rem', fontWeight: isChildActive ? 500 : 400 }}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          }

          // Normal top-level item (no children)
          const isActive = selectedKey === itemKey;

          return (
            <ListItem key={itemKey} sx={{ paddingLeft: 2, paddingRight: 2, paddingTop: 0, paddingBottom: 0 }}>
              <ListItemButton
                onClick={() => {
                  onSelectKey && onSelectKey(itemKey, item);
                  onViewChange && onViewChange(item.view);
                }}
                sx={{
                  borderRadius: 1,
                  marginBottom: 0.5,
                  paddingTop: 1,
                  paddingBottom: 1,
                  paddingLeft: 1.5,
                  paddingRight: 1.5,
                  backgroundColor: isActive ? theme.palette.primary.main : 'transparent',
                  color: isActive ? theme.palette.primary.contrastText : theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: isActive ? theme.palette.primary.dark : theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 32, color: isActive ? theme.palette.primary.contrastText : theme.palette.text.secondary }}>
                  <Icon fontSize="small" />
                </ListItemIcon>

                <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '0.8125rem', fontWeight: isActive ? 500 : 400 }} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

/* =======================
   Sidebar (top-level)
   - builds a flat map of all menu entries (in render order)
   - keeps `selectedKey` local so only one entry is active at a time
   - when `currentView` prop changes, it finds the FIRST matching entry and selects it
   - auto-opens parent groups when a child is selected via currentView
   ======================= */

export function Sidebar({ currentView, onViewChange, onToggleSidebar }) {
  const theme = useTheme();

  // which unique key is currently selected (example keys: 'fav-0', 'dash-2', 'page-0-child-1')
  const [selectedKey, setSelectedKey] = useState(null);

  // control expanded groups by label (e.g., 'User Profile')
  const [openMenus, setOpenMenus] = useState({});

  // Create a flat map of all items (in the order they are rendered). We don't mutate arrays.
  const navMap = useMemo(() => {
    const map = [];

    // favorites
    favoriteItems.forEach((it, idx) => {
      map.push({ key: `fav-${idx}`, view: it.view, label: it.label, section: 'Favorites' });
    });

    // recently
    recentlyItems.forEach((it, idx) => {
      map.push({ key: `recent-${idx}`, view: it.view, label: it.label, section: 'Recently' });
    });

    // dashboards
    dashboardItems.forEach((it, idx) => {
      map.push({ key: `dash-${idx}`, view: it.view, label: it.label, section: 'Dashboards' });
    });

    // pages (top-level + children)
    pageItems.forEach((it, idx) => {
      const parentKey = `page-${idx}`;
      map.push({ key: parentKey, view: it.view, label: it.label, section: 'Pages', isParent: true });
      if (it.children && Array.isArray(it.children)) {
        it.children.forEach((child, cidx) => {
          const childKey = `${parentKey}-child-${cidx}`;
          map.push({ key: childKey, view: child.view, label: child.label, section: 'Pages', parentLabel: it.label });
        });
      }
    });

    return map;
  }, []);

  // Helper: find first navMap entry that matches a given view
  const findEntryByView = (view) => navMap.find((e) => e.view === view);

  // When external currentView prop changes, select corresponding entry (only the FIRST match).
  useEffect(() => {
    if (!currentView) return;

    const entry = findEntryByView(currentView);
    if (entry) {
      setSelectedKey(entry.key);
      // if entry has a parentLabel, open that group
      if (entry.parentLabel) {
        setOpenMenus((prev) => ({ ...prev, [entry.parentLabel]: true }));
      }
    }
  }, [currentView, navMap]);

  // Called by NavigationSection when an item (or parent) is clicked
  const handleSelectKey = (key, item) => {
    setSelectedKey(key);

    // If the selected item is a child, ensure its parent is open
    // We can figure that from navMap (parentLabel property)
    const navEntry = navMap.find((e) => e.key === key);
    if (navEntry && navEntry.parentLabel) {
      setOpenMenus((prev) => ({ ...prev, [navEntry.parentLabel]: true }));
    }
  };

  // Toggle group open state by label (used for parent items with children)
  const handleToggleMenu = (label) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        width: 280,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          padding: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
          height: 64,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              backgroundColor: theme.palette.primary.main,
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: theme.palette.primary.contrastText,
            }}
          >
            B
          </Avatar>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem', color: theme.palette.text.primary }}>
            ByeWind
          </Typography>
        </Box>
      </Box>

      {/* Navigation */}
      <Box sx={{ flex: 1, overflowY: 'auto', paddingTop: 2 }}>
        <NavigationSection
          title="Favorites"
          items={favoriteItems}
          currentView={currentView}
          onViewChange={onViewChange}
          theme={theme}
          sectionId="fav"
          selectedKey={selectedKey}
          onSelectKey={handleSelectKey}
          openMenus={openMenus}
          onToggleMenu={handleToggleMenu}
        />

        <NavigationSection
          title="Recently"
          items={recentlyItems}
          currentView={currentView}
          onViewChange={onViewChange}
          theme={theme}
          sectionId="recent"
          selectedKey={selectedKey}
          onSelectKey={handleSelectKey}
          openMenus={openMenus}
          onToggleMenu={handleToggleMenu}
        />

        <NavigationSection
          title="Dashboards"
          items={dashboardItems}
          currentView={currentView}
          onViewChange={onViewChange}
          theme={theme}
          sectionId="dash"
          selectedKey={selectedKey}
          onSelectKey={handleSelectKey}
          openMenus={openMenus}
          onToggleMenu={handleToggleMenu}
        />

        <NavigationSection
          title="Pages"
          items={pageItems}
          currentView={currentView}
          onViewChange={onViewChange}
          theme={theme}
          sectionId="page"
          selectedKey={selectedKey}
          onSelectKey={handleSelectKey}
          openMenus={openMenus}
          onToggleMenu={handleToggleMenu}
        />
      </Box>
    </Box>
  );
}
