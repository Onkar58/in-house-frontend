import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import MainInfo from './StudentInfo/MainInfo'
import RankRating from './StudentInfo/RankRating'
import SkillsLang from './StudentInfo/SkillsLang'
import RecentSubmissions from './StudentInfo/RecentSubmissions'

const StudentInfo = () => {
    const location = useLocation()
    console.log("lll", location.pathname.split("/")[2]);
    const navigate = useNavigate()
    const [studentData, setStudentData] = useState({})
    const [skillsData, setSkillsData] = useState({})
    const [loading, setLoading] = useState(true)
    const fetchStudentData = async () => {
        const data = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}${location.pathname}`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )
            .then(data => data.json())
            .then(data => data)
            .catch(err => console.log("Error", err))
        console.log("studentData", data);
        if (data.success) {
            setStudentData(data.message)
        }
        else
            toast.error(data.message)
        setLoading(false)

    }
    const fetchSkills = async () => {
        const data = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/student/getskills`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(
                    {
                        username: location.pathname.split("/")[2]
                    })

            }
        )
            .then(data => data.json())
            .then(data => data)
            .catch(err => console.log("Error", err))
            console.log(data.message);
        if (data.success) {
            setSkillsData(data.message)
        }
    }
    useEffect(() => {
        fetchStudentData()
        fetchSkills()
    }, [])
    return (
        loading ?
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-40" viewBox="0 0 200 200">
                <circle fill="none" stroke="white" strokeWidth="15" strokeLinecap="round" strokeDasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transform-origin="center">
                    <animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite">
                    </animateTransform>
                </circle>
            </svg> :
            studentData.profileData ?
                <>
                    <MainInfo info={studentData.profileData} />
                    <RankRating rankRatings={studentData.rankRatings} questions={studentData.questions} />
                    <SkillsLang skills={skillsData.skillsData} />
                    <RecentSubmissions  data={skillsData.recentSubmissions.recentSubmissionList}/>
                </> :
                <div className='mt-40 w-full flex items-center flex-col gap-10'>
                    <h1 className='text-4xl font-[600] text-white opacity-50 text-center my-auto'>No Student Found</h1>
                    <button className='bg-primary bg-opacity-80 p-3 px-5 rounded-md text-white font-[600] cursor-pointer' onClick={() => navigate(-1)}>Go Back</button>
                </div>

    )
}

export default StudentInfo