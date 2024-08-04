import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contacts from './Contacts';
import Footer from './Footer';
import Projects from './Projects';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Navbar />
        <Routes>

          <Route path='/' element={<Home  />} />
          <Route path='/About' element={<About  />} />
          <Route path='/Skills' element={<Skills  />} />
          <Route path='/Projects' element={<Projects  />} />
          <Route path='/Contacts' element={<Contacts  />} />

        </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
