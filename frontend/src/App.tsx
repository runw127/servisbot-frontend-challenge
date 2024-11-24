import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import { useState } from 'react';
import BotsPage from './pages/BotsPage';
import WorkersWithLogsPage from './pages/WorkersWithLogsPage';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <BrowserRouter>
                    <PrimarySearchAppBar darkMode={darkMode} setDarkMode={setDarkMode}/>
                    <Routes>
                        <Route path="/bots" element={<BotsPage />} />
                        <Route path="/bots/:botId/workers" element={<WorkersWithLogsPage />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </ThemeProvider>
    );
}

export default App;
