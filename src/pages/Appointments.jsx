import { useState, useEffect, useMemo } from 'react';
import Navbar from '../componant/Navbar';
import AppointmentTable from '../AppointmentComponant/AppointmentTable';
import AppointmentHeader from '../AppointmentComponant/AppointmentHeader';
import AppointmentStats from '../AppointmentComponant/AppointmentStats';
import AppointmentToolbar from '../AppointmentComponant/AppointmentToolbar';
import AppointmentModal from '../AppointmentComponant/AppointmentModal';
import AppointmentCardList from '../AppointmentComponant/AppointmentCardList';
import '../pages/Appointments.css';

export default function Appointments() {
  const [appointments, setAppointments] = useState(() => {
    const stored = localStorage.getItem('Appointment');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        console.warn(`Failed to parse Appointment data : ${e.message}`);
      }
    }
    return [];
  });

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortBy, setSortBy] = useState('');

  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: '',
    Doctor: '',
    Specialty: '',
    Date: '',
    Time: '',
    Type: 'consultation',
    Status: 'pending',
    notes: ''
  });

  useEffect(() => {
    localStorage.setItem('Appointment', JSON.stringify(appointments));
  }, [appointments]);

  const stats = useMemo(() => {
    const total = appointments.length;
    const today = new Date().toISOString().split('T')[0];
    const todayCount = appointments.filter(a => a.Date === today).length;
    const pending = appointments.filter(a => a.Status === 'pending').length;
    const completed = appointments.filter(a => a.Status === 'completed').length;
    return { total, todayCount, pending, completed };
  }, [appointments]);

  const filtered = useMemo(() => {
    let result = appointments;
    if (search) {
      result = result.filter(a =>
        a.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (statusFilter) {
      result = result.filter(a => a.Status === statusFilter);
    }
    if (sortBy === 'date') {
      result = [...result].sort((a, b) => a.Date.localeCompare(b.Date) || a.Time.localeCompare(b.Time));
    } else if (sortBy === 'patient') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [appointments, search, statusFilter, sortBy]);

  const openAddModal = () => {
    setEditingId(null);
    setForm({
      name: '',
      Doctor: '',
      Specialty: '',
      Date: '',
      Time: '',
      Type: 'consultation',
      Status: 'pending',
      notes: ''
    });
    setModalOpen(true);
  };

  const openEditModal = (id) => {
    const app = appointments.find(a => a.id === id);
    if (!app) return;
    setEditingId(id);
    setForm({
      name: app.name,
      Doctor: app.Doctor,
      Specialty: app.Specialty,
      Date: app.Date,
      Time: app.Time,
      Type: app.Type,
      Status: app.Status,
      notes: app.notes || ''
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const saveAppointment = () => {
    const { name, Doctor, Specialty, Date, Time, Type, Status, notes } = form;
    if (!name || !Doctor || !Specialty || !Date || !Time || !Type || !Status) {
      alert('Please fill all required fields.');
      return;
    }
    if (editingId) {
      setAppointments(prev =>
        prev.map(a =>
          a.id === editingId
            ? { ...a, name, Doctor, Specialty, Date, Time, Type, Status, notes }
            : a
        )
      );
    } else {
      const newApp = {
        id: Date.now(),
        name,
        Doctor,
        Specialty,
        Date,
        Time,
        Type,
        Status,
        notes
      };
      setAppointments(prev => [...prev, newApp]);
    }
    closeModal();
  };

  const deleteAppointment = (id) => {
    if (!window.confirm('Are you sure you want to delete this appointment?')) return;
    setAppointments(prev => prev.filter(a => a.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="appointments-page">
        <div className="appointments-container">
          <AppointmentHeader onAdd={openAddModal} />
          <AppointmentStats stats={stats} />
          <AppointmentToolbar
            search={search}
            onSearchChange={setSearch}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
          <AppointmentTable
            appointments={filtered}
            onEdit={openEditModal}
            onDelete={deleteAppointment}
          />
          <AppointmentCardList
            appointments={filtered}
            onEdit={openEditModal}
            onDelete={deleteAppointment}
          />
        </div>
        <AppointmentModal
          isOpen={modalOpen}
          onClose={closeModal}
          form={form}
          onChange={handleChange}
          onSave={saveAppointment}
          isEditing={!!editingId}
        />
      </div>
    </>
  );
}