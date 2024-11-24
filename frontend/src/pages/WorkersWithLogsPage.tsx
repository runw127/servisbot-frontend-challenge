import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CollapsibleTable from '../components/CollapsibleTable';
import { Typography } from '@mui/material';
import { DataProvider } from '../context/DataContext';
import { WorkerWithLogs } from '../models/api.model';
import { fetchWorkersWithLogs } from '../services/workerDataService';

const WorkersWithLogsPage: React.FC = () => {
  const { botId } = useParams<{ botId: string }>();
  const [workersWithLogs, setWorkersWithLogs] = useState<WorkerWithLogs[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWorkersWithLogs = async () => {
      if (botId) {
        try {
          const result =  await fetchWorkersWithLogs(botId)

          setWorkersWithLogs(result);
        } catch (err) {
          setError('Failed to fetch workers');
        } finally {
          setLoading(false);
        }
      }
    };

    loadWorkersWithLogs();
  }, [botId]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <DataProvider data={workersWithLogs}>
      <CollapsibleTable />
    </DataProvider>
  );
};

export default WorkersWithLogsPage;
