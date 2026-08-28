
export default function FilterGroup()
{
  
    return(

        <>
            <div className="filter-group">

              <select className="filter-select">

                <option value="">
                  Specialty
                </option>

                <option value="cardiologist">
                  Cardiologist
                </option>

                <option value="neurologist">
                  Neurologist
                </option>

                <option value="pediatrician">
                  Pediatrician
                </option>

                <option value="orthopedic">
                  Orthopedic Surgeon
                </option>

                <option value="dermatologist">
                  Dermatologist
                </option>

                <option value="psychiatrist">
                  Psychiatrist
                </option>

                <option value="endocrinologist">
                  Endocrinologist
                </option>

              </select>

              <select className="filter-select">

                <option value="">
                  Department
                </option>

                <option value="cardiology">
                  Cardiology
                </option>

                <option value="neurology">
                  Neurology
                </option>

                <option value="pediatrics">
                  Pediatrics
                </option>

                <option value="orthopedics">
                  Orthopedics
                </option>

                <option value="dermatology">
                  Dermatology
                </option>

                <option value="psychiatry">
                  Psychiatry
                </option>

                <option value="endocrinology">
                  Endocrinology
                </option>

              </select>

              <select className="filter-select">

                <option value="">
                  Status
                </option>

                <option value="available">
                  Available
                </option>

                <option value="busy">
                  Busy
                </option>

                <option value="offline">
                  Offline
                </option>

              </select>

              <select className="filter-select">

                <option value="">
                  Experience
                </option>

                <option value="0-5">
                  0-5 Years
                </option>

                <option value="5-10">
                  5-10 Years
                </option>

                <option value="10-15">
                  10-15 Years
                </option>

                <option value="15+">
                  15+ Years
                </option>

              </select>

              <select className="filter-select sort-select">

                <option value="">
                  Sort by
                </option>

                <option value="name">
                  Name
                </option>

                <option value="experience">
                  Experience
                </option>

                <option value="patients">
                  Patients
                </option>

                <option value="rating">
                  Rating
                </option>

              </select>

            </div>

        </>
    )
}