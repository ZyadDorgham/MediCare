import { useEffect } from 'react';

export default function GetData({
    setData,
    setError,
    setLoading
}) {

    useEffect(() => {

        async function getPatients() {

            const savedData = localStorage.getItem('items');

            if (savedData) {

                setData(JSON.parse(savedData));
                setLoading(false);

                return;
            }

            try {

                const request = await fetch(
                    'https://dummyjson.com/users'
                );

                if (!request.ok) {
                    throw new Error(
                        'Failed to fetch patients'
                    );
                }

                const response = await request.json();

                const patients = response.users.map((user) => ({
                    id: user.id,
                    name: `${user.firstName} ${user.lastName}`,
                    age: user.age,
                    gender: user.gender,
                    bloodGroup: user.bloodGroup,
                    phone: user.phone,
                    email: user.email,
                    avatar: user.image,
                    status: 'Active'
                }));

                setData(patients);

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }
        }

        getPatients();

    }, [setData, setError, setLoading]);
}