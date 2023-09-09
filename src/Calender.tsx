import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

// Create an event list
const events = [
  {
    title: 'Meeting 1',
    start: new Date(2023, 8, 7, 10, 0), // Year, Month (0-based), Day, Hour, Minute
    end: new Date(2023, 8, 7, 11, 30),
  },
  {
    title: 'Meeting 2',
    start: new Date(2023, 8, 8, 14, 0),
    end: new Date(2023, 8, 8, 15, 30),
  },
  // Add more events as needed
];

const localizer = momentLocalizer(moment);

function CalendarComponent() {
  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '500px' }}
      />
    </div>
  );
}

export default CalendarComponent;