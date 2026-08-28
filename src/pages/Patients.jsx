import { useEffect, useState } from 'react';

import Navbar from '../componant/Navbar';
import PatientHeader from '../PatiantComponant/PatientHeader';
import PatientStats from '../PatiantComponant/PatientStats';
import PatientToolbar from '../PatiantComponant/PatientToolbar';
import PatientTable from '../PatiantComponant/PatientTable';
import PatientCard from '../PatiantComponant/PatientCard';
import LoadingSkeleton from '../PatiantComponant/LoadingSkeleton';
import EmptyState from '../PatiantComponant/EmptyState';
import ErrorState from '../PatiantComponant/ErrorState';
import GetData from '../GetData';
import Fitring from '../MainComponant/Fitring';
import ModelAdd from '../MainComponant/ModelAdd';

import './Patients.css';


const Patients = () => {

    const [data, setData] = useState(()=>{
        let users = JSON.parse(localStorage.getItem('items'));
        return users ? users : [];
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [search, setsearch] = useState("");

    const [sort, setSort] = useState("");
    const [gender, setGender] = useState("");
    const [blood, setBlood] = useState("");
    const [age, setAge] = useState("");

const [counter, setcounter] = useState(() => {
    const savedCounter = localStorage.getItem('counter');
    return savedCounter ? Number(savedCounter) : 0;
});

useEffect(() => {
    localStorage.setItem('counter', counter);
}, [counter]);


    const [openmodel, setopenmodel] = useState(false);

    const [form, setform] = useState({
        name: "",
        age: "",
        gender: "",
        blood: "",
        phone: "",
        email: "",
        Status: ""
    });

    useEffect(()=>{
        localStorage.setItem('items',JSON.stringify(data))
    },[data])

    const totalPatients = data.length;

    const malePatients = data.filter(
        patient =>
            patient.gender?.toLowerCase() === 'male'
    ).length;

    const femalePatients = data.filter(
        patient =>
            patient.gender?.toLowerCase() === 'female'
    ).length;

    const empty =
        !loading &&
        !error &&
        data.length === 0;

    const Filterd = Fitring({
        data,
        search,
        gender,
        blood,
        age,
        sort
    });

    function HandleInput(e) {

        const {
            name,
            type,
            value,
            checked
        } = e.target;

        setform({
            ...form,
            [name]:
                type === 'checkbox'
                    ? checked
                    : value
        });
    }

    function OpenModel() {
        setopenmodel(true);
    }

    function CloseModel() {
        setopenmodel(false);
    }

    function AddPatient(e) {

        e.preventDefault();

        if (
            form.name === "" ||
            form.age === "" ||
            form.email === "" ||
            form.phone === "" ||
            form.Status === "" ||
            form.gender === "" ||
            form.blood === ""
        ) {
            return;
        }

        const newPatient = {

            id: Date.now(),

            name: form.name,

            age: Number(form.age),

            gender: form.gender,

            bloodGroup: form.blood,

            phone: form.phone,

            email: form.email,

            avatar: "",

            status: form.Status
        };

        setData(prevData => [
            ...prevData,
            newPatient
        ]);

        

        setform({
            name: "",
            age: "",
            gender: "",
            blood: "",
            phone: "",
            email: "",
            Status: ""
        });

        setopenmodel(false);
        setcounter(prev => prev + 1);
    }

    function HandleFilter(type, value) {

        if (type === "gender") {
            setGender(value);
        }

        if (type === "blood") {
            setBlood(value);
        }

        if (type === "age") {
            setAge(value);
        }
    }

function handleDelete(id) {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this patient?"
    );

    if (!confirmDelete) return;

    setData(prevData =>
        prevData.filter(patient => patient.id !== id)
    );
}
    return (
        <>
            <GetData
                setData={setData}
                setLoading={setLoading}
                setError={setError}
            />

            <Navbar />

            <div className="patients-page">

                <div className="container">

                    <PatientHeader
                        AddPatient={OpenModel}
                    />

                    <PatientStats
                        totalPatients={totalPatients}
                        newPatients={counter}
                        malePatients={malePatients}
                        femalePatients={femalePatients}
                    />

                    <PatientToolbar
                        searchValue={search}
                        onSearchChange={setsearch}
                        onSortChange={(e) =>
                            setSort(e.target.value)
                        }
                        onFilterChange={HandleFilter}
                    />

                    {loading && (
                        <LoadingSkeleton />
                    )}

                    {error && (
                        <ErrorState
                            onRetry={() =>
                                window.location.reload()
                            }
                        />
                    )}

                    {empty && (
                        <EmptyState />
                    )}

                    {!loading &&
                        !error &&
                        !empty && (
                            <>
                                <div className="patient-table-wrapper">

                                    <PatientTable
                                        patients={Filterd}
                                        onDelete={handleDelete}
                                    />

                                </div>

                                <div className="patient-cards">

                                    {Filterd.map(
                                        (patient) => (
                                            <PatientCard
                                                key={patient.id}
                                                patient={patient}
                                                onDelete={handleDelete}
                                            />
                                        )
                                    )}

                                </div>
                            </>
                        )}

                </div>

            </div>

            <ModelAdd
                openmodel={openmodel}
                form={form}
                HandleInput={HandleInput}
                AddPatient={AddPatient}
                CloseModel={CloseModel}
            />
        </>
    );
};

export default Patients;