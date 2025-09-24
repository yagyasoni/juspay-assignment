import React from 'react';
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
  useTheme,
} from '@mui/material';

const products = [
  {
    name: 'ASOS Ridley High Waist',
    price: '$79.49',
    quantity: '82',
    amount: '$6,518.18'
  },
  {
    name: 'Marco Lightweight Shirt',
    price: '$128.50',
    quantity: '37',
    amount: '$4,754.50'
  },
  {
    name: 'Half Sleeve Shirt',
    price: '$39.99',
    quantity: '64',
    amount: '$2,559.36'
  },
  {
    name: 'Lightweight Jacket',
    price: '$20.00',
    quantity: '184',
    amount: '$3,680.00'
  },
  {
    name: 'Marco Shoes',
    price: '$79.49',
    quantity: '64',
    amount: '$1,965.81'
  }
];

export function ProductsTable() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card
      sx={{
        minWidth: '655px',
        margin: 0,
        backgroundColor: isDark ? 'rgba(35, 39, 47, 1)' : '#F7F9FB',
        color: isDark ? '#FFF' : '#181A20',
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            marginBottom: 3,
            fontWeight: 600,
            fontSize: '14px',
            color: isDark ? '#FFF' : '#181A20'
          }}
        >
          Top Selling Products
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    color: isDark ? '#FFF' : theme.palette.text.secondary,
                    fontWeight: 500,
                    borderBottom: `1px solid ${isDark ? '#222' : theme.palette.divider}`,
                    fontSize: '0.875rem',
                    backgroundColor: isDark ? '#rgba(35, 39, 47, 1)' : undefined
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    color: isDark ? '#FFF' : theme.palette.text.secondary,
                    fontWeight: 500,
                    borderBottom: `1px solid ${isDark ? '#222' : theme.palette.divider}`,
                    fontSize: '0.875rem',
                    backgroundColor: isDark ? '#rgba(35, 39, 47, 1)' : undefined
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  sx={{
                    color: isDark ? '#FFF' : theme.palette.text.secondary,
                    fontWeight: 500,
                    borderBottom: `1px solid ${isDark ? '#222' : theme.palette.divider}`,
                    fontSize: '0.875rem',
                    backgroundColor: isDark ? '#rgba(35, 39, 47, 1)' : undefined
                  }}
                >
                  Quantity
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: isDark ? '#FFF' : theme.palette.text.secondary,
                    fontWeight: 500,
                    borderBottom: `1px solid ${isDark ? '#222' : theme.palette.divider}`,
                    fontSize: '0.875rem',
                    backgroundColor: isDark ? '#rgba(35, 39, 47, 1)' : undefined
                  }}
                >
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.name}
                  sx={{
                    backgroundColor: isDark ? '#rgba(35, 39, 47, 1)' : '#F7F9FB',
                    '&:hover': {
                      backgroundColor: isDark ? '#222' : theme.palette.action.hover,
                    },
                    '&:last-child td': { borderBottom: 0 }
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontWeight: 500,
                      paddingTop: 2,
                      paddingBottom: 2,
                      fontSize: '0.875rem',
                      borderBottom: `1px solid ${isDark ? '#222' : theme.palette.divider}`,
                      color: isDark ? '#FFF' : '#181A20'
                    }}
                  >
                    {product.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: isDark ? '#FFF' : theme.palette.text.secondary,
                      paddingTop: 2,
                      paddingBottom: 2,
                      fontSize: '0.875rem',
                      borderBottom: `1px solid ${isDark ? '#222' : theme.palette.divider}`,
                    }}
                  >
                    {product.price}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: isDark ? '#FFF' : theme.palette.text.secondary,
                      paddingTop: 2,
                      paddingBottom: 2,
                      fontSize: '0.875rem',
                      borderBottom: `1px solid ${isDark ? '#222' : theme.palette.divider}`,
                    }}
                  >
                    {product.quantity}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontWeight: 500,
                      paddingTop: 2,
                      paddingBottom: 2,
                      fontSize: '0.875rem',
                      borderBottom: `1px solid ${isDark ? '#222' : theme.palette.divider}`,
                      color: isDark ? '#FFF' : '#181A20'
                    }}
                  >
                    {product.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
