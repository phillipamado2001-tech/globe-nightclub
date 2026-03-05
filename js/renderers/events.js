// Globe Nightclub - Events Renderer
// Renders upcoming events from Google Sheets data

function renderEvents(data) {
  const container = document.getElementById('eventsContainer');
  if (!container) return;

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  // Filter future events and sort by date
  const upcoming = data.filter(e => {
    if (!e.name || !e.date) return false;
    const d = new Date(e.date);
    return !isNaN(d) && d >= now;
  }).sort((a, b) => new Date(a.date) - new Date(b.date));

  if (upcoming.length === 0) {
    container.innerHTML = '<div class="no-events">No upcoming events right now. Check back soon!</div>';
    return;
  }

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  container.innerHTML = upcoming.map(e => {
    const d = new Date(e.date + 'T12:00:00');
    const name = escapeHtml(e.name);
    const time = escapeHtml(e.time || '8PM \u2013 2AM');
    const genre = escapeHtml(e.genre);
    const tag = escapeHtml(e.tag || 'Event');
    const desc = escapeHtml(e.description || e.desc || '');
    const flyer = e.flyer_url || e.flyer || '';
    const ticket = e.ticket_link || e.ticketlink || '';

    return `<div class="event-row">
      <div class="event-date">
        <div class="month">${months[d.getMonth()]}</div>
        <div class="day">${String(d.getDate()).padStart(2, '0')}</div>
        <div class="weekday">${days[d.getDay()]}</div>
      </div>
      <div class="event-info" style="display:flex;align-items:center;gap:1.5rem">
        ${flyer ? `<img src="${escapeHtml(flyer)}" class="event-flyer" alt="">` : ''}
        <div>
          <h3>${name}</h3>
          <div class="event-details">
            <span>${time}</span>
            ${genre ? `<span>${genre}</span>` : ''}
          </div>
          ${desc ? `<p style="color:var(--text-sec);font-size:.82rem;margin-top:.4rem;line-height:1.5">${desc}</p>` : ''}
          <div class="event-tag-row"><span class="event-tag">${tag}</span></div>
        </div>
      </div>
      ${ticket ? `<a href="${escapeHtml(ticket)}" target="_blank" rel="noopener" class="event-action">Tickets</a>` : ''}
    </div>`;
  }).join('');
}
