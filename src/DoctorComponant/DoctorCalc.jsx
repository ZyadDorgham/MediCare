import { useMemo } from "react";
import {
  FaUserMd,
  FaUserCheck,
  FaHospital,
  FaCalendarCheck
} from "react-icons/fa";

export default function DoctorCalc() {

  const items = JSON.parse(localStorage.getItem("doctors") || '[]');

  const avilable = useMemo(() => {
    return items.filter(
      element => element.status === "available"
    ).length;
  }, [items]);

  const department = useMemo(() => {
    return new Set(
      items
        .map(element => element.department)
        .filter(Boolean)
    ).size;
  }, [items]);

  const specialties = useMemo(() => {
    return new Set(
      items
        .map(element => element.specialty)
        .filter(Boolean)
    ).size;
  }, [items]);

  return (
    <>
      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon blue">
            <FaUserMd />
          </div>

          <div className="stat-info">
            <span className="stat-value">
              {items.length}
            </span>

            <span className="stat-label">
              Total Doctors
            </span>

            <span className="stat-support">
              +2 this month
            </span>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon green">
            <FaUserCheck />
          </div>

          <div className="stat-info">
            <span className="stat-value">
              {avilable}
            </span>

            <span className="stat-label">
              Available Now
            </span>

            <span className="stat-support">
              8 in consultation
            </span>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon purple">
            <FaHospital />
          </div>

          <div className="stat-info">
            <span className="stat-value">
              {department}
            </span>

            <span className="stat-label">
              Departments
            </span>

            <span className="stat-support">
              3 specialities each
            </span>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon orange">
            <FaCalendarCheck />
          </div>

          <div className="stat-info">
            <span className="stat-value">
              {specialties}
            </span>

            <span className="stat-label">
              Specialties
            </span>

            <span className="stat-support">
              Across all departments
            </span>
          </div>
        </div>

      </div>
    </>
  );
}