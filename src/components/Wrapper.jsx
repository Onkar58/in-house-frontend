import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Walkthrough from './Walkthrough'

import { homepageSteps } from "../stepsInfo/HomePageSteps"
import { studentInfoSteps } from "../stepsInfo/StudentInfoSteps"

const stepsMapping = {
    "Homepage": homepageSteps,
    "StudentInfo": studentInfoSteps,
}

const Wrapper = ({ children }) => {
    const [showWalkthrough, setShowWalkThrough] = useState(false)
    const [steps, setSteps] = useState(null)
    useEffect(() => {
        setSteps(stepsMapping[children.type.name])

    }, [])
    return (
        <div className='mx-auto my-0 w-screen px-5 md:px-10 lg:w-[90%] xl:w-4/5 min-h-screen'>
            {showWalkthrough && <Walkthrough onClose={() => setShowWalkThrough(false)} steps={steps} />}
            <Navbar setShowWalkThrough={setShowWalkThrough} />
            <div className='pseudoNavbar h-16 w-full'></div>
            {children}
        </div>
    )
}

export default Wrapper