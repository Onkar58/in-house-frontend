import React, { useEffect, useState } from 'react'
import fruit1 from '../../assets/fruit1.png'
import fruit2 from '../../assets/fruit2.png'
import fruit3 from '../../assets/fruit3.png'
import fruit4 from '../../assets/fruit4.png'
import fruit5 from '../../assets/fruit5.png'
import fruit6 from '../../assets/fruit6.png'
import fruit7 from '../../assets/fruit7.png'
import fruit8 from '../../assets/fruit8.png'
import StudentCard from './StudentCard'
import { auth } from '../../utils/firebaseConfig'

const trialData = [
    {
        name: "Onkar Waghmode",
        img: fruit1,
        ranking: 342_123,
    },
    {
        name: "Kalash Gawande",
        img: fruit2,
        ranking: 34116,
    },
    {
        name: "Rahul Patil",
        img: fruit3,
        ranking: 342_123,
    },
    {
        name: "Rahul Patil",
        img: fruit3,
        ranking: 342_123,
    },
    {
        name: "Rahul Patil",
        img: fruit3,
        ranking: 342_123,
    },
    {
        name: "Rahul Patil",
        img: fruit4,
        ranking: 342_123,
    },
    {
        name: "Rahul Patil",
        img: fruit5,
        ranking: 342_123,
    },
    {
        name: "Rahul Patil",
        img: fruit6,
        ranking: 342_123,
    },
    {
        name: "Rahul Patil",
        img: fruit7,
        ranking: 342_123,
    },
    {
        name: "Rahul Patil",
        img: fruit8,
        ranking: 342_123,
    },
]


const StudentCards = () => {

    const [students, setStudents] = useState([])
    const fetchData = async () => {
        const studentData = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/user/gethomepagedata/`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                email: auth.currentUser.email
            })
        })
        const stIds = await studentData.json()
        if (stIds) {
            console.log("saad", stIds["data"]);
            setStudents(stIds["data"])
        }
        // console.log(students);
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="my-20 flex flex-wrap justify-center items-baseline gap-5 md:gap-10 gap-y-20 md:gap-y-20 w-fit">
            {students.map((student, index) => (
                <StudentCard key={index} data={student} />
            ))}
        </div>
    )
}

export default StudentCards