import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CalendarState {
  year: number;
  month: number;
}

const initialState: CalendarState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setMonthYear: (state, action: PayloadAction<{ year: number; month: number }>) => {
      state.year = action.payload.year;
      state.month = action.payload.month;
    },
    resetToToday: (state) => {
      state.year = new Date().getFullYear();
      state.month = new Date().getMonth();
    },
  },
});

export const { setMonthYear, resetToToday } = calendarSlice.actions;
export default calendarSlice.reducer;
