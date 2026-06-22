
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Events from './pages/Events';
import Home from './pages/Home';
import SideBar from './components/SideBar';
import { Settings } from './pages/Settings';
import { Help } from './pages/Help';
import { Profile } from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <SideBar />
        <Box sx={{ flexGrow: 1, px: 2, gap: '10px', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;



