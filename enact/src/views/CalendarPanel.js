import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import Scroller from '@enact/sandstone/Scroller';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function CalendarApp({ name, expirationDate }) {
  const calEventSources = [
    {
      googleCalendarId: 'hkhh972123@google.com',
      backgroundColor: '#f5dfe2',
      rendering: 'background',
    },
  ];

  const event = {
    title: { name },
    end: { expirationDate },
  };

  return (
    <Scroller>
      <div className="CalendarApp">
        <div className="Calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              googleCalendarPlugin,
            ]}
            eventSources={calEventSources}
            googleCalendarApiKey={'AIzaSyCpC0bTrytCsEVyVZDKrHK1_1h5RloRYWc'}
            eventBackgroundColor={'#ffd0c682'}
            eventBorderColor={'#fba28ed6'}
            eventTextColor={'transparent'}
            events={event}
          />
        </div>
      </div>
    </Scroller>
  );
}
