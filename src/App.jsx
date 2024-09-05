import React from 'react'
import Navbar from './componenets/Navbar'
import Hero from './componenets/Hero'
import Card from './componenets/Card'
import About from './componenets/About'
import Services from './componenets/Services'
import Projects from './componenets/Projects'
import Experience from './componenets/Experience'
import Form from './componenets/Form'

function App() {
  return (
    <div className='bg-zinc-200 '>
      <Navbar />
      <Hero />
      <Card />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Form />
    </div>
  )
}

export default App