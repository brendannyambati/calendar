export interface CalendarEvent {
  id: string;
  calendarId: string;
  title: string;
  description: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  startDate: string;
  endDate: string;
  allDay: boolean;
  color: string;
  createdAt: string;
  updatedAt: string;
}
