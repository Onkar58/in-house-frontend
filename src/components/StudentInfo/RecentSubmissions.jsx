import React from 'react'
import SingleProblem from './SingleProblem';

const RecentSubmissions = ({ data }) => {
    return (
        <div id="recentSubmissions" className='text-center mb-20'>
            <div className='mt-5 rounded-md flex justify-between items-center w-full text-white p-3 px-10'>
                <p className='w-[400px]'>Title</p>
                <p>Sumitted Time</p>
                <p>Language</p>
            </div>
            {data?.map(d => <SingleProblem info={d} />)}
        </div>
    )
}

export default RecentSubmissions