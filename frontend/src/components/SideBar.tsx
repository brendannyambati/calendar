import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { CalendarMonth, Task, Settings, Help, Person } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isCalendarPage = location.pathname === '/';
  const isEventsPage = location.pathname === '/events';
  const isSettingsPage = location.pathname === '/settings';
  const isHelpPage = location.pathname === '/help';
  const isProfilePage = location.pathname === '/profile';

  const calendarButtonStyles = {
    // border: '1px solid white',
    height: '40px',
    width: '40px',
    borderRadius: '5px',
    background: isCalendarPage ? 'white' : 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const taskButtonStyles = {
    // border: '1px solid white',
    height: '40px',
    width: '40px',
    borderRadius: '5px',
    background: isEventsPage ? 'white' : 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const settingsButtonStyles = {
    // border: '1px solid white',
    height: '40px',
    width: '40px',
    borderRadius: '5px',
    background: isSettingsPage ? 'white' : 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const helpButtonStyles = {
    // border: '1px solid white',
    height: '40px',
    width: '40px',
    borderRadius: '5px',
    background: isHelpPage ? 'white' : 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const profileButtonStyles = {
    // border: '1px solid white',
    height: '40px',
    width: '40px',
    borderRadius: '5px',
    background: isProfilePage ? 'white' : 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Box
      sx={{
        maxWidth: 100,
        bgcolor: '#003e6a',
        color: 'white',
        height: '100vh',
        p: '70px 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
      }}
    >
      <IconButton
        sx={calendarButtonStyles}
        onClick={() => navigate('/')}
        disableRipple={true}
      >
        <CalendarMonth sx={{ color: isCalendarPage ? '#003e6a' : 'white' }} />
      </IconButton>
      <IconButton
        sx={taskButtonStyles}
        onClick={() => navigate('/events')}
        disableRipple={true}
      >
        <Task sx={{ fontSize: 30, color: isEventsPage ? '#003e6a' : 'white' }} />
      </IconButton>
      <IconButton
        sx={settingsButtonStyles}
        onClick={() => navigate('/settings')}
        disableRipple={true}
      >
        <Settings sx={{ color: isSettingsPage ? '#003e6a' : 'white' }} />
      </IconButton>
      <IconButton
        sx={helpButtonStyles}
        onClick={() => navigate('/help')}
        disableRipple={true}
      >
        <Help sx={{ color: isHelpPage ? '#003e6a' : 'white' }} />
      </IconButton>
      <IconButton
        sx={profileButtonStyles}
        onClick={() => navigate('/profile')}
        disableRipple={true}
      >
        <Person sx={{ color: isProfilePage ? '#003e6a' : 'white' }} />
      </IconButton>
    </Box>
  );
};

export default SideBar;