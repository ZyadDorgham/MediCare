import './Home.css';
import Navbar from '../componant/Navbar';

const Home = ({
  patientsCount = '2.4k',
  doctorsCount = '180+',
  appointmentsCount = '340',
  departmentsCount = '12',
}) => {

  return (
    <>
      <Navbar />
      
      <main className="home">

        <section className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <div className="badge">
                <span className="dot"></span>
                Healthcare Management Platform
              </div>
              <h1>
                Smart Healthcare Management,<br />
                <span className="highlight">Made Simple.</span>
              </h1>
              <p>
                Manage patients, doctors, appointments, and healthcare data from one
                simple and powerful platform.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-outline">Explore Features</button>
              </div>
              <div className="hero-trust-badge">
                <span>⭐ 4.9/5 </span>
                <span>Trusted by 1,200+ clinics</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card">
                <div className="card-header">
                  <div className="avatar-group">
                    <div className="avatar blue">JD</div>
                    <div className="avatar teal">AK</div>
                    <div className="avatar gray">+3</div>
                  </div>
                  <span className="badge-visual">Active</span>
                </div>
                <div className="stats-row">
                  <div className="stat-item">
                    <div className="stat-label">Patients</div>
                    <div className="stat-value">{patientsCount} <span className="unit">managed</span></div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">Doctors</div>
                    <div className="stat-value">{doctorsCount} <span className="unit">specialists</span></div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">Appointments</div>
                    <div className="stat-value">{appointmentsCount} <span className="unit">scheduled</span></div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">Departments</div>
                    <div className="stat-value">{departmentsCount} <span className="unit">active</span></div>
                  </div>
                </div>
                <div className="card-footer">
                  <span>📈 +12% this month</span>
                  <span className="trend">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                      <polyline points="17,6 23,6 23,12" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                    </svg>
                    Growing
                  </span>
                </div>
              </div>
              <div className="float-card fc1">
                <span className="fc-icon">📋</span>
                <span>New patient today</span>
              </div>
              <div className="float-card fc2">
                <span className="fc-icon teal">📅</span>
                <span>2 appointments left</span>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="section-header">
              <h2>Everything you need to manage healthcare</h2>
              <p>All tools integrated for seamless operations</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Patient Management</h3>
                <p>Full patient profiles, history, and records at your fingertips.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👨‍⚕️</div>
                <h3>Doctor Management</h3>
                <p>Organize specialists, schedules, and departments easily.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h3>Appointment Scheduling</h3>
                <p>Book, reschedule, and track appointments in real time.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Analytics &amp; Reports</h3>
                <p>Get insights on performance, patient flow, and outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container stats-container">
            <div className="stats-item-large">
              <span className="stats-number">{patientsCount}</span>
              <span className="stats-label">Patients Managed</span>
            </div>
            <div className="stats-item-large">
              <span className="stats-number">{doctorsCount}</span>
              <span className="stats-label">Healthcare Professionals</span>
            </div>
            <div className="stats-item-large">
              <span className="stats-number">{appointmentsCount}</span>
              <span className="stats-label">Appointments Booked</span>
            </div>
            <div className="stats-item-large">
              <span className="stats-number">{departmentsCount}</span>
              <span className="stats-label">Departments</span>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-container">
            <h2>Take Control of Your Healthcare Management</h2>
            <p>Everything you need to organize healthcare operations in one modern platform.</p>
            <button className="btn btn-primary btn-cta">Get Started</button>
          </div>
        </section>

      </main>
    </>
  );
};

export default Home;