import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';

function Home() {
  return (
    <div>
      <h1>
        Hi,<br />
        I'm Roshan
      </h1>
      <div className="buttons">
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;