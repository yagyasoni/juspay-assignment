import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { OrdersList } from './OrdersList';

export function OrdersListPage() {
  return (
    <DashboardLayout showNotifications={false}>
      <OrdersList />
    </DashboardLayout>
  );
}