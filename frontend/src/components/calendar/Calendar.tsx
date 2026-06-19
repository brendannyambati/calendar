import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Day } from './Day';
import type { CalendarEvent } from '../../interfaces';


export const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/events`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const changeMonth = (delta: number) => {
    setCurrentDate(new Date(year, month + delta, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const days: { day: number; isCurrentMonth: boolean }[] = [];

  // Previous month days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({ day: daysInPrevMonth - i, isCurrentMonth: false });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, isCurrentMonth: true });
  }

  // Next month days to make 42
  let nextDay = 1;
  while (days.length < 42) {
    days.push({ day: nextDay++, isCurrentMonth: false });
  }

  const today = new Date();
  const isCurrentMonthView = today.getFullYear() === year && today.getMonth() === month;

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box>
          <Button onClick={goToToday}>Today</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Button onClick={() => changeMonth(-1)}>Prev</Button>
          <Typography variant="h5" sx={{ minWidth: '150px', textAlign: 'center' }}>
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </Typography>
          <Button onClick={() => changeMonth(1)}>Next</Button>
        </Box>
        <Box sx={{ width: '80px' }} />
      </Box>

      <Grid container>
        {weekDays.map((day) => (
          <Grid key={day} size={{ xs: 12 / 7 }}>
            <Paper variant="outlined" square sx={{ textAlign: 'center', p: 1, bgcolor: 'background.default' }}>
              <Typography variant="subtitle2">{day}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container>
        {days.map((item, index) => (
          <Grid key={index} size={{ xs: 12 / 7 }}>
            <Day
              day={item.day}
              isCurrentMonth={item.isCurrentMonth}
              isToday={
                isCurrentMonthView &&
                item.isCurrentMonth &&
                item.day === today.getDate()
              }
            >
              {events
                .filter((event) => {
                  const startDate = new Date(event.startDate);
                  return (
                    startDate.getFullYear() === year &&
                    startDate.getMonth() === month &&
                    startDate.getDate() === item.day
                  );
                })
                .map((event) => (
                  <Typography
                    key={event.id}
                    variant="caption"
                    sx={{
                      display: 'block',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      bgcolor: event.color || 'primary.light',
                      color: 'white',
                      mb: 0.5,
                      px: 0.5,
                      borderRadius: 1,
                      fontSize: '0.7rem',
                    }}
                  >
                    {event.title}
                  </Typography>
                ))}
            </Day>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
