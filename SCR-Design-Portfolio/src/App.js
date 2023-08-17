import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import Home from './components/Home/Home';
import About from  './components/about/about';
import Skills from './components/skills/Skills';
import Work from './components/Work/Work';
import Studies from './components/Studies/Studies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';

const App = () => {
  return (
    <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Work />
      <Studies />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App