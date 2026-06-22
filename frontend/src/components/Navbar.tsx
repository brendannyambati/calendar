import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { setMonthYear, resetToToday } from '../store/calendarSlice';
import { CalendarMonth, Task } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const arrowStyles = {
  color: 'white',
  background: '#003e6a',
  width: '30px',
  height: '30px'
};

const todayButtonStyles = {
  color: 'white',
  background: '#003e6a',
  borderRadius: '5px',
  width: '150px',
  height: '30px',
};

export const Navbar = () => {
  const { year, month } = useSelector((state: RootState) => state.calendar);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const changeMonth = (delta: number) => {
    const newDate = new Date(year, month + delta, 1);
    dispatch(setMonthYear({ year: newDate.getFullYear(), month: newDate.getMonth() }));
  };

  const goToToday = () => {
    dispatch(resetToToday());
  };

  const dateString = new Date(year, month, 1).toLocaleString('default', { month: 'long', year: 'numeric' });
  const isCalendarPage = location.pathname === '/';

  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={{ bgcolor: 'white', mb: 0, minHeight: '40px' }} elevation={0}>
        {/* <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: '40px !important' }}> */}
        <Toolbar sx={{ display: 'flex', justifyContent: 'right', minHeight: '40px !important' }} >
          {isCalendarPage && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
              <div style={{ background: 'red' }}/>
              <Button 
                variant="outlined" 
                color="inherit" 
                onClick={goToToday} 
                sx={{ ...todayButtonStyles, flexShrink: 0, py: 0.5, px: 1 }}
              >
                Today
              </Button>
              <Box>
                <Typography variant="h6" sx={{ minWidth: '220px', textAlign: 'center', flexShrink: 0, color: 'black' }}>
                {dateString}
              </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexShrink: 0 }}>
                <IconButton disableRipple onClick={() => changeMonth(-1)} sx={{ ...arrowStyles, mr: 1, p: 0.5 }}>
                  <ChevronLeftIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton disableRipple onClick={() => changeMonth(1)} sx={{ ...arrowStyles, p: 0.5 }}>
                  <ChevronRightIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
            </Box>
          )}
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: '#003e6a', color: 'white', width: 32, height: 32, fontSize: '0.875rem' }}>U</Avatar>
          </Box>
        </Toolbar>

      </AppBar>
    </>
  );
};