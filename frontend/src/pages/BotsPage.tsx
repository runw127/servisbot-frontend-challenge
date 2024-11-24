import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import { fetchBots } from '../services/botDataService';
import { Bot } from '../models/api.model';

const BotsPage: React.FC = () => {
  const [bots, setBots] = useState<Bot[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadBots = async () => {
      try {
        const data = await fetchBots();
        setBots(data);
      } catch (err) {
        setError('Failed to fetch bots');
      } finally {
        setLoading(false);
      }
    };

    loadBots();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  const handleRowClick = (botId: string) => {
    navigate(`/bots/${botId}/workers`);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Bot ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bots.map((bot) => (
            <TableRow
                key={bot.id}
                onClick={() => handleRowClick(bot.id)}
                sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
            >
              <TableCell>{bot.id}</TableCell>
              <TableCell>{bot.name}</TableCell>
              <TableCell>{bot.description}</TableCell>
              <TableCell>{bot.status}</TableCell>
              <TableCell>{new Date(Number(bot.created)).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BotsPage;
