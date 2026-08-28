import { useState, useMemo } from 'react';
import Navbar from '../componant/Navbar';
import DashboardStats from '../DashboardComponant/DashboardStats';
import DashboardCharts from '../DashboardComponant/DashboardCharts';
import DashboardRecent from '../DashboardComponant/DashboardRecent';
import DashboardQuickActions from '../DashboardComponant/DashboardQuickActions';
import './Dashboard.css';

export default function Dashboard() {
  const [patients] = useState(() => {
    const stored = localStorage.getItem('items');
    return stored ? JSON.parse(stored) : [];
  });

  const [doctors] = useState(() => {
    const stored = localStorage.getItem('doctors');
    return stored ? JSON.parse(stored) : [];
  });

  const [appointments] = useState(() => {
    const stored = localStorage.getItem('Appointment');
    return stored ? JSON.parse(stored) : [];
  });

  const stats = useMemo(() => {
    const totalPatients = patients.length;
    const totalDoctors = doctors.length;
    const totalAppointments = appointments.length;

    const today = new Date().toISOString().split('T')[0];
    const todayAppointments = appointments.filter(a => a.Date === today).length;

    const pendingAppointments = appointments.filter(a => a.Status === 'pending').length;
    const completedAppointments = appointments.filter(a => a.Status === 'completed').length;

    const availableDoctors = doctors.filter(d => d.status === 'available').length;

    const activePatients = patients.filter(p => p.status === 'Active').length;
    const inactivePatients = patients.filter(p => p.status === 'Inactive').length;

    const malePatients = patients.filter(p => p.gender?.toLowerCase() === 'male').length;
    const femalePatients = patients.filter(p => p.gender?.toLowerCase() === 'female').length;

    const specialties = new Set(doctors.map(d => d.specialty).filter(Boolean)).size;
    const departments = new Set(doctors.map(d => d.department).filter(Boolean)).size;

    return {
      totalPatients,
      totalDoctors,
      totalAppointments,
      todayAppointments,
      pendingAppointments,
      completedAppointments,
      availableDoctors,
      activePatients,
      inactivePatients,
      malePatients,
      femalePatients,
      specialties,
      departments
    };
  }, [patients, doctors, appointments]);

  const recentAppointments = useMemo(() => {
    return [...appointments]
      .sort((a, b) => {
        const dateA = new Date(`${a.Date}T${a.Time}`);
        const dateB = new Date(`${b.Date}T${b.Time}`);
        return dateB - dateA;
      })
      .slice(0, 5);
  }, [appointments]);

  const statusDistribution = useMemo(() => {
    const pending = appointments.filter(a => a.Status === 'pending').length;
    const confirmed = appointments.filter(a => a.Status === 'confirmed').length;
    const completed = appointments.filter(a => a.Status === 'completed').length;
    const cancelled = appointments.filter(a => a.Status === 'cancelled').length;
    return { pending, confirmed, completed, cancelled };
  }, [appointments]);

  return (
    <>
      <Navbar />
      <div className="dashboard-page">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <div>
              <h1>Dashboard</h1>
              <p>Overview of your healthcare management system</p>
            </div>
          </div>

          <DashboardStats stats={stats} />

          <div className="dashboard-grid">
            <DashboardCharts
              statusDistribution={statusDistribution}
              stats={stats}
            />
            <DashboardRecent appointments={recentAppointments} />
          </div>

          <DashboardQuickActions />
        </div>
      </div>
    </>
  );
}