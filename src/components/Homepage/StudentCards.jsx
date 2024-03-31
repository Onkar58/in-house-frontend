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



const StudentCards = ({studentsData}) => {

    // const [students, setStudents] = useState([])
    return (
        <div className="my-20 flex flex-wrap justify-center items-baseline gap-5 md:gap-10 gap-y-20 md:gap-y-20 w-fit">
            {studentsData?.map((student, index) => (
                <StudentCard key={index} data={student} />
            ))}
        </div>
    )
}

export default StudentCards