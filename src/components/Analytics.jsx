import React, { useEffect, useState } from 'react'
import LetsAnalyse from './Analytics/LetsAnalyse'
import ActiveUsers from './Analytics/Charts/ActiveUsers'
import AllQuestions from './Analytics/Charts/AllQuestions'
import { useUserAuth } from '../providers/UserContext'
import StudentStrip from './Analytics/StudentStrip'
import Loader from './Loader'

const Analytics = () => {
  const { user } = useUserAuth()
  const [analyticsData, setAnalyticsData] = useState([])
  const [recentSubmissions, setRecentSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    const data = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/user/getallstudentsskillstats/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email
      })
    })
    const stIds = await data.json()
    console.log("Student ANalytics", stIds);
    setAnalyticsData(stIds.data.map(user => (user.skillsData)))
    setRecentSubmissions(stIds.data.map(user => (user.recentSubmissions)))
  }

  useEffect(() => {
    fetchData()
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <>
      <LetsAnalyse />
      <div className='w-full flex flex-col items-center gap-5 justify-between'>
        <div className='w-full flex items-center justify-between mb-20'>
          {!loading && <AllQuestions inputData={analyticsData} />}
          <ActiveUsers recentSubmissions={recentSubmissions} />
        </div>
        <div className='text-white bg-opacity-20 flex items-center justify-between w-full px-10 py-3 rounded-lg' >
          <p className='underline text-lg min-w-[200px] cursor-pointer'>Username</p>
          <p className='text-opacity-60'>Status</p>
          <div className='max-w-[450px] flex-1 flex items-center justify-between text-center'>
            <p>Advanced</p>
            <p>Intermediate</p>
            <p>Fundamental</p>
          </div>
        </div>
        {analyticsData.map(
          (user, idx) => <StudentStrip submissionData={recentSubmissions[idx]} data={user} key={idx} />
        )}
      </div>
    </>
  )
}

export default Analytics