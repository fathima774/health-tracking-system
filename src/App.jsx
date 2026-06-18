import {Route,Routes, BrowserRouter } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import Register from "./pages/Register"
import SummaryCard from "./components/dashboard/SummaryCard"
import GoalChart from "./components/dashboard/GoalChart"
import WeightChart from "./components/dashboard/WeightChart"



function App() {

  

  return (
    <>
    {/* <BrowserRouter> */}
    {/* <Navbar /> */}
    {/* <Register /> */}
    {/* </BrowserRouter> */}

    {/* <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>


    

      <SummaryCard
        title="Current Weight"
        value="76 kg"
        icon="⚖️"
        color="#00B894"
      />

      <SummaryCard
        title="Total Workouts"
        value="45"
        icon="🏋️"
        color="#0984E3"
      />

      <SummaryCard
        title="Calories Burned"
        value="12,500"
        icon="🔥"
        color="#FDCB6E"
      />

      <SummaryCard
        title="Active Goals"
        value="3"
        icon="🎯"
        color="#6C5CE7"
      />
      </div> */}
      {/* <GoalChart /> */}
      <WeightChart />
        

    
    
    
    
    
      
    </>
  )
}


export default App
