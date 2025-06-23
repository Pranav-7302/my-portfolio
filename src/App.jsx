import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import About from './components/About/about';
import Project from './components/Project/Project';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
