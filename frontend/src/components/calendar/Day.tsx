import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface DayProps {
  day: number;
  isToday: boolean;
  isCurrentMonth: boolean;
}

export const Day: React.FC<DayProps> = ({ day, isToday, isCurrentMonth }) => {
  return (
    <Paper
      variant="outlined"
      square
      sx={{
        padding: 1,
        textAlign: 'left',
        minHeight: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: isCurrentMonth ? 'background.paper' : 'action.disabledBackground',
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
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: isToday ? 'bold' : 'normal' }}>
          {day}
        </Typography>
      </Box>
    </Paper>
  );
};
