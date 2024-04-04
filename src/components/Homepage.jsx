import React, { useState, useEffect } from 'react'
import Herosection from './Homepage/Herosection'
import StudentCards from './Homepage/StudentCards'
import { useUserAuth } from '../providers/UserContext'
import toast from 'react-hot-toast'


const Homepage = () => {
  const [studentsData, setStudentsData] = useState([""])

  const { user } = useUserAuth()

  const fetchStudentsData = async () => {
    const studentData = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/user/gethomepagedata/`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        email: user.email
      })
    })
    const stIds = await studentData.json()
    if (stIds) {
      setStudentsData(await stIds["data"]?.reverse())
    }
  }
  const addStudent = async (studentId) => {
    const isStudentAdded = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/user/addstudent/`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        input: studentId
      })
    })
    const studentAdded = await isStudentAdded.json()
    if (studentAdded.success) {
      toast.success("Student Added")
      fetchStudentsData()
    }
    else
      toast.error("Student Already Added or not Found")
  }

  const deleteUser = async (email, username) => {
    const deletedUser = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/user/deletestudent/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        username: username
      })
    })
    const studentDeleted = await deletedUser.json()
    if (studentDeleted.success) {
      toast.success("Student Deleted")
      fetchStudentsData()
    }
    else
      toast.error(studentDeleted.message)
  }
  useEffect(() => {
    fetchStudentsData()
  }, [])
  return (
    <div>
      <Herosection addStudent={addStudent} />
      {
        studentsData?.length === 0 ?
          <h1>No Student is Added</h1> :
          <StudentCards studentsData={studentsData} deleteUser={deleteUser} />}
    </div>
  )
}

export default Homepage