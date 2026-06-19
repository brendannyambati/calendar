import { Injectable } from '@nestjs/common';
import { CalendarEvent } from './event.interface';

@Injectable()
export class EventService {
  private readonly mockEvents: CalendarEvent[] = [
    {
      id: '550e8400-e29b-41d4-a716-446655440000',
      calendarId: 'work-calendar-id',
      title: 'Sprint Planning',
      description: 'Review backlog',
      status: 'PENDING',
      priority: 'HIGH',
      startDate: '2026-06-22T16:00:00Z',
      endDate: '2026-06-22T17:00:00Z',
      allDay: false,
      color: '#2563eb',
      createdAt: '2026-06-18T18:00:00Z',
      updatedAt: '2026-06-18T18:00:00Z',
    },
    {
      id: 'e31b40c0-6d4f-4d48-9c16-2c5e5c7a4073',
      calendarId: 'personal-calendar-id',
      title: 'Doctor Appointment',
      description: 'Annual checkup',
      status: 'PENDING',
      priority: 'MEDIUM',
      startDate: '2026-06-22T10:00:00Z',
      endDate: '2026-06-23T11:00:00Z',
      allDay: false,
      color: '#16a34a',
      createdAt: '2026-06-18T18:00:00Z',
      updatedAt: '2026-06-18T18:00:00Z',
    },
    {
      id: 'f87b8d42-2b63-4f96-8575-c54d194c730e',
      calendarId: 'work-calendar-id',
      title: 'Project Demo',
      description: 'Showcase new features',
      status: 'PENDING',
      priority: 'HIGH',
      startDate: '2026-06-22T14:00:00Z',
      endDate: '2026-06-24T15:30:00Z',
      allDay: false,
      color: '#d97706',
      createdAt: '2026-06-18T18:00:00Z',
      updatedAt: '2026-06-18T18:00:00Z',
    },
    { id: '1', calendarId: 'personal', title: 'Gym', description: 'Weights', status: 'PENDING', priority: 'LOW', startDate: '2026-06-01T08:00:00Z', endDate: '2026-06-01T09:00:00Z', allDay: false, color: '#f59e0b', createdAt: '2026-06-01T00:00:00Z', updatedAt: '2026-06-01T00:00:00Z' },
    { id: '2', calendarId: 'work', title: 'Meeting', description: 'Sync', status: 'PENDING', priority: 'MEDIUM', startDate: '2026-06-05T10:00:00Z', endDate: '2026-06-05T11:00:00Z', allDay: false, color: '#3b82f6', createdAt: '2026-06-01T00:00:00Z', updatedAt: '2026-06-01T00:00:00Z' },
    { id: '3', calendarId: 'personal', title: 'Lunch', description: 'With friend', status: 'COMPLETED', priority: 'LOW', startDate: '2026-06-10T12:00:00Z', endDate: '2026-06-10T13:00:00Z', allDay: false, color: '#ef4444', createdAt: '2026-06-01T00:00:00Z', updatedAt: '2026-06-01T00:00:00Z' },
    { id: '4', calendarId: 'work', title: 'Review', description: 'PR Review', status: 'PENDING', priority: 'HIGH', startDate: '2026-06-12T14:00:00Z', endDate: '2026-06-12T15:00:00Z', allDay: false, color: '#8b5cf6', createdAt: '2026-06-01T00:00:00Z', updatedAt: '2026-06-01T00:00:00Z' },
    { id: '5', calendarId: 'personal', title: 'Movie', description: 'New release', status: 'PENDING', priority: 'LOW', startDate: '2026-06-15T19:00:00Z', endDate: '2026-06-15T21:00:00Z', allDay: false, color: '#ec4899', createdAt: '2026-06-01T00:00:00Z', updatedAt: '2026-06-01T00:00:00Z' },
    { id: '6', calendarId: 'work', title: 'Workshop', description: 'Tech talk', status: 'PENDING', priority: 'MEDIUM', startDate: '2026-06-20T09:00:00Z', endDate: '2026-06-20T12:00:00Z', allDay: false, color: '#10b981', createdAt: '2026-06-01T00:00:00Z', updatedAt: '2026-06-01T00:00:00Z' },
    { id: '7', calendarId: 'personal', title: 'Dinner', description: 'Family', status: 'PENDING', priority: 'MEDIUM', startDate: '2026-06-25T18:00:00Z', endDate: '2026-06-25T20:00:00Z', allDay: false, color: '#f43f5e', createdAt: '2026-06-01T00:00:00Z', updatedAt: '2026-06-01T00:00:00Z' },
    { id: '8', calendarId: 'work', title: 'Call', description: 'Client call', status: 'PENDING', priority: 'HIGH', startDate: '2026-06-27T10:00:00Z', endDate: '2026-06-27T11:00:00Z', allDay: false, color: '#6366f1', createdAt: '2026-06-01T00:00:00Z', updatedAt: '2026-06-01T00:00:00Z' },
    { id: '9', calendarId: 'personal', title: 'Shopping', description: 'Groceries', status: 'PENDING', priority: 'LOW', startDate: '2026-06-28T16:00:00Z', endDate: '2026-06-28T17:00:00Z', allDay: false, color: '#84cc16', createdAt: '2026-06-01T00:00:00Z', updatedAt: '2026-06-01T00:00:00Z' },
    { id: '10', calendarId: 'work', title: 'Retrospective', description: 'Sprint end', status: 'PENDING', priority: 'MEDIUM', startDate: '2026-06-30T15:00:00Z', endDate: '2026-06-30T16:00:00Z', allDay: false, color: '#a855f7', createdAt: '2026-06-01T00:00:00Z', updatedAt: '2026-06-01T00:00:00Z' },
  ];

  findAll(): CalendarEvent[] {
    return this.mockEvents;
  }
}
