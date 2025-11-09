// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ColorPicker from "./colorPicker";
// import LiveTimer from "./LiveTimer";
// import ClockShop from "./ClockShop";
import FancyStopwatch from "./FancyStopwatch.jsx";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact.jsx";

function App() {
  return (
    // <Router>
    //   <nav>
    //     <Link to="/">Home</Link> |{" "}
    //     <Link to="/about">About</Link> | {" "}
    //       <Link to="/contact">Contact</Link>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />

    //   </Routes>
    // </Router>
    <FancyStopwatch />
  );
}

export default App;

