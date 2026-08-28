import { useMemo } from "react";

export default function Fitring({
    data,
    search,
    gender,
    blood,
    age,
    sort
}) {
    const Filterd = useMemo(() => {
        const result = data.filter((patient) => {
            const searchMatch = patient.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const genderMatch =
                gender === "" ||
                patient.gender?.toLowerCase() === gender.toLowerCase();

            const bloodMatch =
                blood === "" ||
                patient.bloodGroup === blood;

            const ageMatch =
                age === "" ||
                (age === "0-18" &&
                    patient.age >= 0 &&
                    patient.age <= 18) ||
                (age === "19-35" &&
                    patient.age >= 19 &&
                    patient.age <= 35) ||
                (age === "36-50" &&
                    patient.age >= 36 &&
                    patient.age <= 50) ||
                (age === "50+" &&
                    patient.age > 50);

            return (
                searchMatch &&
                genderMatch &&
                bloodMatch &&
                ageMatch
            );
        });

        switch (sort) {
            case "name":
                return [...result].sort((a, b) =>
                    a.name.localeCompare(b.name)
                );

            case "age":
                return [...result].sort((a, b) =>
                    a.age - b.age
                );

            default:
                return result;
        }
    }, [search, data, sort, gender, blood, age]);

    return Filterd;
}