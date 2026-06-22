import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface DayProps {
  day: number;
  isToday: boolean;
  isCurrentMonth: boolean;
  children?: React.ReactNode;
}

export const Day: React.FC<DayProps> = ({ day, isToday, isCurrentMonth, children }) => {
  return (
    <Paper
      variant="outlined"
      square
      sx={{
        padding: 1,
        textAlign: 'left',
        height: '100%',
        minHeight: '120px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: isCurrentMonth ? 'background.paper' : 'action.disabledBackground',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: 30,
          height: 30,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isToday ? 'primary.main' : 'transparent',
          color: isToday ? 'primary.contrastText' : 'inherit',
          mb: 1,
          position: 'absolute',
          top: 8,
          left: 8,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: isToday ? 'bold' : 'normal' }}>
          {day}
        </Typography>
      </Box>
      <Box sx={{ width: '100%', height: '100%', overflowY: 'auto', marginTop: '40px' }}>
        {children}
      </Box>
    </Paper>
  );
};
