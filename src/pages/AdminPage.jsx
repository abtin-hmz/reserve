// src/AdminPage.jsx
import React from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

function AdminPage() {
  const resourceRequests = [
    { id: 1, name: 'Classroom A', user: 'User1', status: 'Pending' },
    { id: 2, name: 'Laptop 1', user: 'User2', status: 'Pending' },
    // Add more dummy requests
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Resource Name</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resourceRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.user}</TableCell>
                <TableCell>{request.status}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" style={{ marginRight: '8px' }}>
                    Approve
                  </Button>
                  <Button variant="contained" color="secondary" size="small">
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default AdminPage;
