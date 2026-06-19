
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Calendar } from './components/calendar/Calendar';
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './store';
import { setMonthYear, resetToToday } from './store/calendarSlice';

const arrowStyles = {
color: 'white',
border: '1px solid white',
width: '30px',
height: '30px'
};

const todayButtonStyles = {
  borderColor: 'white',
  color: 'white',
  borderRadius: '5px',
  widtth: '150px',
  height: '30px',
};

const App = () => {
  const { year, month } = useSelector((state: RootState) => state.calendar);
  const dispatch = useDispatch();

  const changeMonth = (delta: number) => {
    const newDate = new Date(year, month + delta, 1);
    dispatch(setMonthYear({ year: newDate.getFullYear(), month: newDate.getMonth() }));
  };

  const goToToday = () => {
    dispatch(resetToToday());
  };

  const dateString = new Date(year, month, 1).toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={{ bgcolor: '#2563eb', mb: 0 }} elevation={0}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Typography variant="h6">Events</Typography>
          </Box>

          <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
            <Button 
              variant="outlined" 
              color="inherit" 
              onClick={goToToday} 
              sx={{ ...todayButtonStyles, flexShrink: 0 }}
            >
              Today
            </Button>
            <Box sx={{ width: '50%'}}>
              <Typography variant="h4" sx={{ minWidth: '220px', textAlign: 'center', flexShrink: 0 }}>
              {dateString}
            </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexShrink: 0 }}>
              <IconButton onClick={() => changeMonth(-1)} sx={{ ...arrowStyles, mr: 1 }}>
                <ChevronLeftIcon />
              </IconButton>
              <IconButton onClick={() => changeMonth(1)} sx={arrowStyles}>
                <ChevronRightIcon />
              </IconButton>
            </Box>
          </Box>
          
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', }}>
            <Avatar sx={{ bgcolor: 'white', color: '#2563eb'}}>U</Avatar>
          </Box>
        </Toolbar>

      </AppBar>
      <Box sx={{ px: 2, pt: 2 }}>
        <Calendar />
      </Box>
    </>
  );
};

export default App;



