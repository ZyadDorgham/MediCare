import { FaPlus } from "react-icons/fa";

export default function DoctorHeader({OpenModLAddDoctor})
{
    return(
        <>
                <div className="page-header">
        
                  <div className="header-left">
        
                    <h1>Doctors</h1>
        
                    <p className="subtitle">
                      Manage doctors, their specialties, availability, and assigned patients.
                    </p>
        
                  </div>
        
                  <button className="btn btn-primary btn-add" onClick={OpenModLAddDoctor}>
                    <FaPlus />
                    Add Doctor
                  </button>
        
                </div>
        
        </>
    )
}