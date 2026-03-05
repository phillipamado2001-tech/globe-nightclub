// Globe Nightclub - Schedule Renderer
// Renders the weekly schedule grid from Sheets data

function renderSchedule(data) {
  const container = document.getElementById('scheduleContainer');
  if (!container) return;

  // Sort by day order
  const dayOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const sorted = [...data].sort((a, b) => {
    return dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day);
  });

  // Auto-highlight today
  const jsDay = new Date().getDay(); // 0=Sun
  const todayMap = [6, 0, 1, 2, 3, 4, 5]; // JS day -> dayOrder index
  const todayIndex = todayMap[jsDay];

  container.innerHTML = sorted.map((d, i) => {
    const isActive = d.status === 'active';
    const isToday = i === todayIndex;
    const activeClass = (isActive && isToday) ? ' active' : '';

    if (isActive) {
      return `<div class="sched-day${activeClass}">
        <div class="sched-day-label">${escapeHtml(d.day)}</div>
        <div class="sched-day-event">${escapeHtml(d.event_name)}</div>
        <div class="sched-day-time">${escapeHtml(d.time)}</div>
      </div>`;
    }
    return `<div class="sched-day${activeClass}">
      <div class="sched-day-label">${escapeHtml(d.day)}</div>
      <div class="sched-closed">Closed</div>
    </div>`;
  }).join('');
}
