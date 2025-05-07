import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar"
import HeroSection from './components/HeroSection'
import Artist from './components/Artist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-[#1b1f24] w-full h-[100vh]">
      <NavBar/>
      <HeroSection/>
      <Artist />
    </div>
    </>
  )
}

export default App
