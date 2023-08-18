export default function events() {
  const events = []
  sunday(events)
  wednesday(events)

  return events
}

function sunday(events) {
  let sunday = new Date(2023, 7, 13, 10, 0)
  
  for(let i=0; i < 100; i++) {
    events.push({title: 'Sunday Service', start: new Date(sunday)})
    sunday.setDate(sunday.getDate() + 7)
    sunday.setHours(10, 0, 0, 0)
  }
  return events
}

function wednesday(events) {
  let wednesday = new Date(2023, 7, 16, 19, 0)
  
  for(let i=0; i < 100; i++) {
    events.push({title: 'Wed Service', start: new Date(wednesday)})
    wednesday.setDate(wednesday.getDate() + 7)
    wednesday.setHours(19, 0, 0, 0)
  }
  return events
}