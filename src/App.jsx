import Leaderboard from "./components/Leaderboard"
import Login from "./components/Login"
import Wrapper from "./components/Wrapper"
import { Routes, Route } from 'react-router-dom'
import SignUp from "./components/SignUp"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Settings from "./components/Settings"
import Analytics from "./components/Analytics"
import RecentSearches from "./components/RecentSearches"
import Homepage from "./components/Homepage"
import Trending from "./components/Trending"

function App() {


  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />} >
          <Route path="/" element={<Wrapper children={<Homepage />} />} />
          <Route path="/leaderboard" element={<Wrapper children={<Leaderboard />} />} />
          <Route path="/analytics" element={<Wrapper children={<Analytics />} />} />
          <Route path="/trending" element={<Wrapper children={<Trending />} />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
        {/* <Route path="/analysis" element={<Analysis />} /> */}
        {/* <Route path="/recent" element={<Recent />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </>
  )
}

export default App
