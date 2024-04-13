import React from 'react';

const ActiveUsers = ({ recentSubmissions }) => {
    const totalStudents = recentSubmissions.length
    const status = { activeUsers: 0, inactiveUsers: 0 }
    recentSubmissions.map(user => {
        const submissionTime = parseFloat(user?.recentSubmissionList[0]?.timestamp)
        if (parseInt(Date.now() / 1000) - submissionTime <= 604800 && !isNaN(submissionTime)) {
            status.activeUsers++
        }
        else
            status.inactiveUsers++
    })
    const active = parseInt(status.activeUsers / totalStudents * 100)
    const inactive = parseInt(status.inactiveUsers / totalStudents * 100)
    const circumference = 2 * 3.14 * 80
    const strokeLength1 = circumference / 100 * active
    const strokeLength2 = circumference / 100 * inactive

    return (
        <div className='bg-[#d9d9d9] bg-opacity-10 p-10 rounded-lg'>
            <h1 className='text-3xl text-white mb-10'>Active and Inactice Users</h1>
            <div className='flex justify-around items-center mb-5 text-xl text-white text-center text-opacity-70'>
                <section>
                    <p className='size-5 bg-[#34B53A] inline-block'></p> Active
                </section>
                <section>
                    <p className='size-5 bg-[#4339F2] inline-block'> </p> Inactive
                </section>
            </div>
            <section className='flex gap-5'>
                <div className='relative w-fit'>
                    <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]'>{active}%</p>
                    <svg viewBox="0 0 180 180" className='size-40 -rotate-90' fill='#E2FBD7' xmlns="http://www.w3.org/2000/svg">
                        <circle cx="90" cy="90" r="80" />
                        <circle cx="90" cy="90" r="80" fill="none" stroke="#34B53A" strokeWidth="10" strokeDasharray={`${strokeLength1}, ${circumference}`} strokeLinecap="round" />
                    </svg>
                </div>
                <div className='relative w-fit'>
                    <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]'>{inactive}%</p>
                    <svg viewBox="0 0 180 180" className='size-40 -rotate-90' fill='#DAD7FE' xmlns="http://www.w3.org/2000/svg">
                        <circle cx="90" cy="90" r="80" />
                        <circle cx="90" cy="90" r="80" fill="none" stroke="#4339F2" strokeWidth="10" strokeDasharray={`${strokeLength2}, ${circumference}`} strokeLinecap="round" />
                    </svg>
                </div>
            </section>

        </div>

    );
};

export default ActiveUsers;
