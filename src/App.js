import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import './App.css';

// Components import
import Header from './Components/Header';
import Home from "./Components/Home/Home";
import About from "./Components/AboutMe/About";
import Projects from "./Components/Projects/Projects"
import Technologies from './Components/Home/Technologies/Technologies'


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tech" element={<Technologies />} />
          <Route render={() => <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
