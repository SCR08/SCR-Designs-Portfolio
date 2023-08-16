import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import Home from './components/Home/Home';
import About from  './components/about/about';
import Skills from './components/skills/Skills';
import Studies from './components/Studies/Studies';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Studies />
      <Contact />
    </main>
    </>
  )
}

export default App