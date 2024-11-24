import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Collapse,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useData } from '../context/DataContext';

const CollapsibleTable: React.FC = () => {
  const workers = useData();

  const Row: React.FC<{ worker: typeof workers[number] }> = ({ worker }) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <TableRow>
          <TableCell>
          {worker.logs.length > 0 ? (
              <IconButton
                size="small"
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Collapse row' : 'Expand row'}
              >
                {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
          ) : null}
          </TableCell>
          <TableCell>{worker.id}</TableCell>
          <TableCell>{worker.name}</TableCell>
          <TableCell>{worker.description || 'No Description'}</TableCell>
          <TableCell>{new Date(Number(worker.created)).toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={6} style={{ padding: 0 }}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom>
                  Logs
                </Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Log ID</TableCell>
                      <TableCell>Message</TableCell>
                      <TableCell>Created</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {worker.logs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell>{log.id}</TableCell>
                        <TableCell>{log.message}</TableCell>
                        <TableCell>{new Date(log.created).toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Worker ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workers.map((worker) => (
            <Row key={worker.id} worker={worker} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
