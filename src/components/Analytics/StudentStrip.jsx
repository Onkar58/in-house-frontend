import React from 'react'
import { useNavigate } from 'react-router-dom'
const levels = ["fundamental", "intermediate", "advanced"]

const StudentStrip = ({ submissionData, data }) => {
  let status;
  const submissionTime = parseFloat(submissionData?.recentSubmissionList[0]?.timestamp)
  if (parseInt(Date.now() / 1000) - submissionTime <= 604800 && !isNaN(submissionTime)) {
    status = "Active"
  }
  else
    status = "Inactive"

  const levels = Object.keys(data).filter(key => key !== 'username');
  const maxLevel = levels.reduce((max, level) => {
    return data[level].length > data[max].length ? level : max;
  }, levels[0]);
  const navigate = useNavigate()
  return (
    <div className='bg-white text-white bg-opacity-20 flex items-center justify-between w-full px-10 py-3 rounded-lg' >
      <p className='underline text-lg min-w-[200px] cursor-pointer' onClick={() => navigate(`/student/${data.username}`)}>{data.username}</p>
      <p className='text-opacity-60'>{status}</p>
      <div className='max-w-[450px] flex-1 flex items-center justify-between'>
        {levels.map(level => {
          if (level === maxLevel) {
            return <svg className='size-6' viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.609375" width="26" height="27" rx="10" fill="#4339F2" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7574 18.8995C11.5182 18.8995 11.2894 18.7969 11.1256 18.616L6.91098 13.9549C6.58251 13.5931 6.60071 13.0234 6.94911 12.6832C7.29838 12.343 7.84698 12.361 8.17371 12.7228L11.7487 16.6747L19.0356 8.39289C19.3598 8.02479 19.9075 8.00049 20.2611 8.33529C20.6138 8.67009 20.6381 9.23979 20.3157 9.60609L12.397 18.6061C12.2349 18.7915 12.0044 18.8977 11.7634 18.8995H11.7574Z" fill="white" />
            </svg>
          }
          return <svg className='size-6' viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.609375" y="1" width="26" height="27" rx="10" stroke="#FCFCFC" />
          </svg>

        })}
      </div>
      {/* <p>{data.level}</p> */}
    </div>
  )
}

export default StudentStrip