
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Events from './pages/Events';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Box sx={{ px: 2, pt: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;



