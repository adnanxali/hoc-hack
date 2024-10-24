import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProfilePage,{Navbar} from './pages/ProfilePage'
import ProblemSet from "./componets/Problems/ProblemsListPage/ProblemSet";
import CodingArea from "./componets/CodingArea/CodingArea";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/match' element={<ProfilePage/>}/>
        <Route path="/ProblemSet" element={<ProblemSet />} />
        <Route path="/Problems/:id/:name" element={<CodingArea />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
