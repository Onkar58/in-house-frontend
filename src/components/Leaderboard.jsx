import React, { useEffect, useMemo, useState } from 'react'
import RankCard from './Leaderboard/RankCard'
import RankStrip from './Leaderboard/RankStrip'
import Loader from "./Loader"
import { auth } from '../utils/firebaseConfig'
import { useUserAuth } from '../providers/UserContext'

const Leaderboard = () => {
  const { user } = useUserAuth()
  const [loading, setLoading] = useState(false)
  const [studentData, setStudentData] = useState([])
  const getData = async () => {
    setLoading(true)
    const leaderboardData = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/user/gethomepagedata/`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        email: user.email
      })
    })
    const data = await leaderboardData.json()
    if (data.success) {
      setStudentData(data["data"].sort((a, b) => a.ranking - b.ranking))
    }
    setLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='mt-20'>
      {loading && <Loader />}
      <div className='overflow-x-scroll flex items-center p-5 gap-10 sm:justify-evenly' id="rankCards">
        {studentData.length > 0 ? studentData.slice(0, 3).map((item, index) => {
          return <RankCard data={item} key={index} position={index + 1} />
        }) : <h1 className='text-center text-white text-3xl mt-20 font-[600]'>No Student is Added</h1>
      }
      </div>
      <div className='mt-10 flex flex-col gap-10'>
        {
          studentData.slice(3).map((item, index) => {
            return <RankStrip data={item} position={index + 3} key={index} />
          })
        }
      </div>
    </div>
  )
}

export default Leaderboard