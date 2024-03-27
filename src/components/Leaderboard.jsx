import React, { useEffect, useMemo, useState } from 'react'
import RankCard from './Leaderboard/RankCard'
import RankStrip from './Leaderboard/RankStrip'
import { auth } from '../utils/firebaseConfig'

const Leaderboard = () => {
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
        email: auth.currentUser.email
      })
    })
    const data = await leaderboardData.json()
    if (data) {
      console.log("saad", data["data"]);
      setStudentData(data["data"].sort((a, b) => a.ranking - b.ranking))
    }
    setLoading(false)
  }
  useMemo(() => getData(), [])

  return (
    <div className='mt-20'>
      {loading && <svg class="spinner" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>}
      <div className='overflow-x-scroll flex items-center p-5 gap-10 sm:justify-evenly' id="rankCards">
        {studentData.slice(0, 3).map((item, index) => {
          return <RankCard data={item} key={index} position={index + 1} />
        })}
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