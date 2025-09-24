import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Button,
  TextField,
  InputAdornment,
  Checkbox,
  Avatar,
  Chip,
  IconButton,
  Pagination,
  useTheme,
} from '@mui/material';
import {
  Add as AddIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
  Search as SearchIcon,
  MoreHoriz as MoreHorizIcon,
} from '@mui/icons-material';

const orders = [
  {
    id: '#CM9801',
    user: { name: 'Natali Craig', avatar: 'NC' },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress'
  },
  {
    id: '#CM9802',
    user: { name: 'Kate Morrison', avatar: 'KM' },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete'
  },
  {
    id: '#CM9803',
    user: { name: 'Drew Cano', avatar: 'DC' },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending'
  },
  {
    id: '#CM9804',
    user: { name: 'Orlando Diggs', avatar: 'OD' },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved'
  },
  {
    id: '#CM9805',
    user: { name: 'Andi Lane', avatar: 'AL' },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected'
  }
];

const getStatusColor = (status) => {
  switch (status) {
    case 'In Progress':
      return { backgroundColor: '#e3f2fd', color: '#1976d2' };
    case 'Complete':
      return { backgroundColor: '#e8f5e8', color: '#2e7d32' };
    case 'Pending':
      return { backgroundColor: '#fff3e0', color: '#f57c00' };
    case 'Approved':
      return { backgroundColor: '#f3e5f5', color: '#7b1fa2' };
    case 'Rejected':
      return { backgroundColor: '#ffebee', color: '#d32f2f' };
    default:
      return { backgroundColor: '#f5f5f5', color: '#616161' };
  }
};

export function OrdersList() {
  const [selectedOrders, setSelectedOrders] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const theme = useTheme();

  const toggleOrderSelection = (orderId) => {
    const newSelected = new Set(selectedOrders);
    if (newSelected.has(orderId)) {
      newSelected.delete(orderId);
    } else {
      newSelected.add(orderId);
    }
    setSelectedOrders(newSelected);
  };

  const selectAllOrders = () => {
    if (selectedOrders.size === orders.length) {
      setSelectedOrders(new Set());
    } else {
      setSelectedOrders(new Set(orders.map(order => order.id)));
    }
  };

  return (
    <Box>
      <Card>
        <CardContent>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Order List
            </Typography>
            {/* <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                size="small"
              >
                Add Order
              </Button>
              <Button
                variant="outlined"
                startIcon={<FilterIcon />}
                size="small"
              >
                Filter
              </Button>
              <Button
                variant="outlined"
                startIcon={<SortIcon />}
                size="small"
              >
                Sort
              </Button>
            </Box> */}
          </Box>

     
               <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', gap: 1}}>  <Button
                variant="outlined"
                startIcon={<AddIcon />}
                size="small"
              >
                Add Order
              </Button>
              <Button
                variant="outlined"
                startIcon={<FilterIcon />}
                size="small"
              >
                Filter
              </Button>
              <Button
                variant="outlined"
                startIcon={<SortIcon />}
                size="small"
              >
                Sort
              </Button></Box>
          
            <TextField
              placeholder="Search..."
              size="small"
              sx={{ maxWidth: 300 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Table */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedOrders.size === orders.length}
                      onChange={selectAllOrders}
                      indeterminate={selectedOrders.size > 0 && selectedOrders.size < orders.length}
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500, color: theme.palette.text.secondary }}>Order ID</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: theme.palette.text.secondary }}>User</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: theme.palette.text.secondary }}>Project</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: theme.palette.text.secondary }}>Address</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: theme.palette.text.secondary }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: theme.palette.text.secondary }}>Status</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order, index) => (
                  <TableRow 
                    key={order.id}
                    sx={{
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                      },
                    }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedOrders.has(order.id)}
                        onChange={() => toggleOrderSelection(order.id)}
                      />
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>{order.id}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{ width: 32, height: 32, backgroundColor: theme.palette.grey[300], fontSize: '0.75rem' }}>
                          {order.user.avatar}
                        </Avatar>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {order.user.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{order.project}</TableCell>
                    <TableCell sx={{ color: theme.palette.text.secondary }}>{order.address}</TableCell>
                    <TableCell sx={{ color: theme.palette.text.secondary }}>{order.date}</TableCell>
                    <TableCell>
                      <Chip
                        label={order.status}
                        size="small"
                        sx={{
                          ...getStatusColor(order.status),
                          border: 'none',
                          fontWeight: 500,
                          fontSize: '0.75rem',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton size="small">
                        <MoreHorizIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginTop: 3 
          }}>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              Showing 1 to {orders.length} of {orders.length} results
            </Typography>
            <Pagination 
              count={5} 
              page={currentPage} 
              onChange={(event, value) => setCurrentPage(value)}
              size="small"
              variant="outlined"
              shape="rounded"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}