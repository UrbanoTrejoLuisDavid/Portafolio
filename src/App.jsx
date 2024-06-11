import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Java from './routes/Java';
import Php from './routes/Php';
import Html from './routes/Html';
import Javascript from './routes/Javascript'
import Python from './routes/Python';
import Kotlin from './routes/Kotlin';

const App = () => {
  return (
    <Router>
      <div>
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <h1 className="text-2xl">Mi portafolio</h1>
            <ul className="flex space-x-4">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/java">Java</Link></li>
              <li><Link to="/php">PHP</Link></li>
              <li><Link to="/html">HTML</Link></li>
              <li><Link to="/javascript">JavaScript</Link></li>
              <li><Link to="/python">Python</Link></li>
              <li><Link to="/kotlin">Kotlin</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto my-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/java" element={<Java />} />
            <Route path="/php" element={<Php />} />
            <Route path="/html" element={<Html />} />
            <Route path="/javascript" element={<Javascript />} />
            <Route path="/python" element={<Python />} />
            <Route path="/kotlin" element={<Kotlin />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 Luis David Urbano Trejo. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;



