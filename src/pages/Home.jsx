import { useState } from 'react'
import NavBar from "../components/NavBar"
import HeroSection from '../components/HeroSection'

function Home() {

  return (
    <>
    <div className="bg-[#1b1f24] w-full h-screen">
      <div className="h-fit">
      <NavBar/>
      <HeroSection/>
      </div>
    </div>
    </>
  )
}

export default Home
