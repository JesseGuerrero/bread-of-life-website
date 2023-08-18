'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import events from '@/utils/events'

export default function CalendarPage() {
  return (
      <div className='w-50 mx-auto calendar-container'>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek'
          }}
          nowIndicator={true}
          editable={false}
          selectable={true}
          selectMirror={true}
          initialEvents={events()}
        />
      </div>
  )
}