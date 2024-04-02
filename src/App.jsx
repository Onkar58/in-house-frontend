import Leaderboard from "./components/Leaderboard"
import Login from "./components/Login"
import Wrapper from "./components/Wrapper"
import { Routes, Route } from 'react-router-dom'
import SignUp from "./components/SignUp"
import { ProtectedRoutes, UnProtectedRoutes } from "./components/ProtectedRoutes"
import Analytics from "./components/Analytics"
import Homepage from "./components/Homepage"
import Trending from "./components/Trending"
import bg from './assets/bg.png'

import "./App.css"
import StudentInfo from "./components/StudentInfo"
import Profile from "./components/Profile"

function App() {


  return (
    <div id="mainDiv">
      <Routes>
        <Route element={<ProtectedRoutes />} >
          <Route path="/" element={<Wrapper children={<Homepage />} />} />
          <Route path="/leaderboard" element={<Wrapper children={<Leaderboard />} />} />
          <Route path="/analytics" element={<Wrapper children={<Analytics />} />} />
          <Route path="/trending" element={<Wrapper children={<Trending />} />} />
          <Route path="/profile" element={<Wrapper children={<Profile />} />} />
        </Route>
        <Route element={<UnProtectedRoutes />} >
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route path="/student/*" element={<Wrapper children={<StudentInfo />} />}/>
    </Routes>
    </div >
  )
}

export default App
