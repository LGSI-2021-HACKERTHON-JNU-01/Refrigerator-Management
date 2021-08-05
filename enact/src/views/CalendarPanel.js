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
      textColor: '#FFFFFF',
    },
  ];

  const event = {
    title: { name },
    end: { expirationDate },
  };

  const events = [
    { title: 'apple', date: new Date('2021/09/03') },
    { title: 'plum', date: new Date('2021-08-23') },
  ];

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
            editable={true}
            eventSources={calEventSources}
            googleCalendarApiKey={'AIzaSyCpC0bTrytCsEVyVZDKrHK1_1h5RloRYWc'}
            events={events}
            eventDrop={info => {
              const { start, end } = info.oldEvent._instance.range;
              console.log(start, end);
              const { start: newStart, end: newEnd } =
                info.event._instance.range;
              console.log(newStart, newEnd);
              if (new Date(start).getDate() === new Date(newStart).getDate()) {
                info.revert();
              }
            }}
          />
        </div>
      </div>
    </Scroller>
  );
}
