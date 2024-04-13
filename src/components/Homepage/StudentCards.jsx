import React, { useEffect, useState } from 'react'
import StudentCard from './StudentCard'
import { useUserAuth } from "../../providers/UserContext"


const StudentCards = ({ studentsData}) => {
    const { user } = useUserAuth()
    return (
        <div className="my-20 flex flex-wrap justify-center items-baseline gap-5 md:gap-10 gap-y-20 md:gap-y-20 w-fit">
            {studentsData?.map((student, index) => (
                <StudentCard key={index} data={student} email={user.email}/>
            ))}
        </div>
    )
}

export default StudentCards