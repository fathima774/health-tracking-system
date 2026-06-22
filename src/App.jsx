import {Route,Routes, BrowserRouter } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import Register from "./pages/Register"
import SummaryCard from "./components/dashboard/SummaryCard"
import GoalChart from "./components/dashboard/GoalChart"
import WeightChart from "./components/dashboard/WeightChart"
import WorkoutChart from "./components/dashboard/WorkoutChart"
import Dashboard from "./components/dashboard/Dashboard"
import Login from "./pages/Login"
import WeightTracker from "./pages/WeightTracker";
import Workouts from "./pages/Workouts";
import Goals from "./pages/Goals";
import Profile from "./pages/Profile"



function App() {

  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/weight-tracker" element={<WeightTracker />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    

    
        

    
    
    
    
    
      
    </>
  )
}


export default App
