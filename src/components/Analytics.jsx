import React, { useEffect, useState } from 'react'
import LetsAnalyse from './Analytics/LetsAnalyse'
import ActiveUsers from './Analytics/ActiveUsers'
import AllQuestions from './Analytics/Charts/AllQuestions'
import { useUserAuth } from '../providers/UserContext'
import StudentStrip from './Analytics/StudentStrip'

const Analytics = () => {
  const { user } = useUserAuth()
  const [loading, setLoading] = useState(true)
  const [analyticsData, setAnalyticsData] = useState([])
  const [recentSubmissions, setRecentSubmissions] = useState([])
  const [status, setStatus] = useState({
    activeUsers: 0,
    inactiveUsers: 0,
  })
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
    console.log(status);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    !loading &&
    <>
      <LetsAnalyse />
      <div className='w-full flex flex-col items-center gap-5 justify-between'>
        <div className='w-full flex items-center justify-between mb-20'>
          <AllQuestions inputData={analyticsData} />
          <ActiveUsers recentSubmissions={recentSubmissions} />
        </div>
        {analyticsData.map(
          (user, idx) => <StudentStrip data={user} key={idx} status={"Active"} />
        )}
      </div>
    </>
  )
}

export default Analytics