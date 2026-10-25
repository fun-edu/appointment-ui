const appointments = [
  { time: '09:00', client: 'Emma Johnson', service: 'Dental Checkup', status: 'Confirmed' },
  { time: '10:30', client: 'Noah Smith', service: 'Follow-up Review', status: 'Pending' },
  { time: '13:00', client: 'Ava Martinez', service: 'Consultation', status: 'Confirmed' },
  { time: '15:45', client: 'Liam Brown', service: 'Therapy Session', status: 'Rescheduled' }
];

const summaryCards = [
  { label: 'Today\'s appointments', value: '24' },
  { label: 'New bookings', value: '7' },
  { label: 'No-shows', value: '2' },
  { label: 'Satisfaction', value: '96%' }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <aside className="sidebar">
        <div className="brand">Appointment UI</div>
        <nav aria-label="Sidebar navigation">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Calendar</button>
          <button className="nav-item">Appointments</button>
          <button className="nav-item">Clients</button>
          <button className="nav-item">Reports</button>
        </nav>
      </aside>

      <section className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Overview</p>
            <h1>Appointments Dashboard</h1>
          </div>
          <button className="primary-btn">+ New Booking</button>
        </header>

        <div className="stats-grid">
          {summaryCards.map((card) => (
            <article className="stat-card" key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </article>
          ))}
        </div>

        <div className="content-grid">
          <section className="panel">
            <div className="panel-header">
              <h2>Today&apos;s Schedule</h2>
              <button className="ghost-btn">View all</button>
            </div>

            <div className="appointment-list">
              {appointments.map((appointment) => (
                <div className="appointment-row" key={`${appointment.time}-${appointment.client}`}>
                  <div className="time-block">{appointment.time}</div>
                  <div className="detail-block">
                    <strong>{appointment.client}</strong>
                    <span>{appointment.service}</span>
                  </div>
                  <span className={`status ${appointment.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {appointment.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="panel">
            <div className="panel-header">
              <h2>Availability</h2>
              <button className="ghost-btn">Update</button>
            </div>
            <div className="calendar-preview">
              <div className="calendar-header">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
              </div>
              <div className="calendar-days">
                <span className="day muted">22</span>
                <span className="day muted">23</span>
                <span className="day active">24</span>
                <span className="day">25</span>
                <span className="day">26</span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
