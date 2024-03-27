import Leaderboard from "./components/Leaderboard"
import Login from "./components/Login"
import Wrapper from "./components/Wrapper"
import { Routes, Route } from 'react-router-dom'
import SignUp from "./components/SignUp"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Analytics from "./components/Analytics"
import Homepage from "./components/Homepage"
import Trending from "./components/Trending"
import bg from './assets/bg.png'

import "./App.css"

function App() {


  return (
    <div id="mainDiv" style={{ background: `url(${bg}) rgba(0,0,0,1)`, backgroundSize: "cover", backgroundRepeat: "noRepeat", backgroundAttachment: "fixed", overflowY: "scroll" }}>
      <Routes>
        <Route element={<ProtectedRoutes />} >
          <Route path="/" element={<Wrapper children={<Homepage />} />} />
          <Route path="/leaderboard" element={<Wrapper children={<Leaderboard />} />} />
          <Route path="/analytics" element={<Wrapper children={<Analytics />} />} />
          <Route path="/trending" element={<Wrapper children={<Trending />} />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
