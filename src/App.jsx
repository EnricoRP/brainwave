import React from 'react'
import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Benefits from './components/Benefits'
import Hero from './components/Hero'
import Collaboration from './components/Collaboration'
import Services from './components/Services'
import Pricing from './components/pricing'
import Roadmap from './components/Roadmap'
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services/>
        <Pricing />
        <Roadmap />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
