import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./Doctor.css";
import Navbar from "../componant/Navbar";
import DoctorHeader from "../DoctorComponant/DoctorHeader";
import DoctorCalc from "../DoctorComponant/DoctorCalc";
import ModelAddDoctor from "../MainComponant/ModelAddDoctor";
import SearchWrapper from "../DoctorComponant/SearchWrapper";
import DoctorCard from "../DoctorComponant/DoctorCard";
import TableWrapper from "../DoctorComponant/TableWrapper";
import FilterGroup from "../DoctorComponant/FilterGroup";
const Doctors = () => {

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [ModLAddDoctor, SetModLAddDoctor] = useState(false);

  const [formaddDoctor, setformaddDoctor] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    Specialty: "",
    Department: "",
    Experience: "",
    Status: "",
    Address: ""
  });

  const [search, setsearch] = useState("");

  useEffect(() => {

    async function fetchDoctors() {

      const savedDoctors = localStorage.getItem("doctors");

      if (savedDoctors) {

        setData(JSON.parse(savedDoctors));

        setLoading(false);

        return;
      }

      try {

        const request = await fetch(
          "https://dummyjson.com/users"
        );

        if (!request.ok) {
          throw new Error(
            `Request failed: ${request.status}`
          );
        }

        const response = await request.json();

        setData(response.users);

      } catch (err) {

        setError(err.message);

      } finally {

        setLoading(false);

      }
    }

    fetchDoctors();

  }, []);

  useEffect(() => {

    if (!loading) {
      localStorage.setItem(
        "doctors",
        JSON.stringify(data)
      );
    }

  }, [data, loading]);

  function handleDelete(id) {

    const confirmed = confirm(
      "Are You Sure You Want To Delete This Element?"
    );

    if (!confirmed) return;

    setData(prevData =>
      prevData.filter(
        doctor => doctor.id !== id
      )
    );
  }

  function HandelAddDoctor(e) {

    const { name, value } = e.target;

    setformaddDoctor(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const Searched = useMemo(() => {

    return data.filter((doctor) =>
      `${doctor.firstName} ${doctor.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [data, search]);

  function OpenModLAddDoctor() {

    SetModLAddDoctor(true);

  }

  function CloseModLAddDoctor() {

    SetModLAddDoctor(false);

  }

  
  function AddDoctor() {

    if (
      formaddDoctor.Address === "" ||
      formaddDoctor.Department === "" ||
      formaddDoctor.Experience === "" ||
      formaddDoctor.Specialty === "" ||
      formaddDoctor.Status === "" ||
      formaddDoctor.email === "" ||
      formaddDoctor.fname === "" ||
      formaddDoctor.lname === "" ||
      formaddDoctor.phone === ""
    ) {

      alert(
        "All inputs should be filled!"
      );

      return;
    }

    const newDoctor = {

      id: Date.now(),

      firstName: formaddDoctor.fname,

      lastName: formaddDoctor.lname,

      email: formaddDoctor.email,

      phone: Number(formaddDoctor.phone),

      address: formaddDoctor.Address,

      department: formaddDoctor.Department,

      specialty: formaddDoctor.Specialty,

      experience: Number(
        formaddDoctor.Experience
      ),

      status: formaddDoctor.Status,

      image: null
    };

    setData(prevData => [
      ...prevData,
      newDoctor
    ]);

    SetModLAddDoctor(false);

    setformaddDoctor({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      Specialty: "",
      Department: "",
      Experience: "",
      Status: "",
      Address: ""
    });
  }

  const handleView = (id) => {

    navigate(
      `/doctordetails/${id}`
    );

  };

  return (
    <>
      <Navbar />

      <div className="doctors-page">

        <div className="container">

          <DoctorHeader
            OpenModLAddDoctor={
              OpenModLAddDoctor
            }
          />

          <DoctorCalc />

          <div className="toolbar">
 

        <SearchWrapper search={search} setsearch={setsearch}/>
                
          <FilterGroup/>

          </div>
               
        <TableWrapper Searched={Searched} loading={loading} error={error} handleDelete={handleDelete} handleView={handleView}/>
                          
        <DoctorCard loading={loading}error={error} Searched={Searched} handleDelete={handleDelete} handleView={handleView}/>

        </div>

      </div>

      <ModelAddDoctor
        ModLAddDoctor={ModLAddDoctor}
        CloseModLAddDoctor={
          CloseModLAddDoctor
        }
        formaddDoctor={formaddDoctor}
        HandelAddDoctor={HandelAddDoctor}
        AddDoctor={AddDoctor}
      />

    </>
  );
};

export default Doctors;