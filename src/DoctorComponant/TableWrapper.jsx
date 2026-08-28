 import GetDoctorData from "./GetDoctorData";
 
 export default function TableWrapper({Searched,loading,error,handleDelete,handleView})
 {
    return(

        <>
                  <div className="table-wrapper">
        
                    <table className="doctors-table">
        
                      <thead>
        
                        <tr>
                          <th>Doctor</th>
                          <th>Specialty</th>
                          <th>Department</th>
                          <th>Experience</th>
                          <th>Patients</th>
                          <th>Rating</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
        
                      </thead>
        
                      <tbody>
        
                        <GetDoctorData
                          data={Searched}
                          loading={loading}
                          error={error}
                          onView={handleView}
                          onDelete={handleDelete}
                        />
        
                      </tbody>
        
                    </table>
        
                  </div>
        
        </>
    )
 }