import { useState } from 'react'
import './App.css'
import Home from './pages/home';  
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routes, Route, BrowserRouter} from 'react-router-dom'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
 


export default App
