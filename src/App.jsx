import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar"
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-[#1b1f24] w-screen h-screen">
      <NavBar/>
      <HeroSection/>
    </div>
    </>
  )
}

export default App
