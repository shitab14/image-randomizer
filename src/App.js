import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RandomizeImagesPage from "./RandomizeImagesPage";
import RandomizeWordsPage from "./RandomizeWordsPage";
import "./App.css";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to the Randomizer</h1>
      <div className="nav-buttons">
        <Link to="/randomize-images">
          <button>Randomize Images</button>
        </Link>
      </div>
      <div className="nav-buttons">
        <Link to="/randomize-words">
          <button>Randomize Words</button>
        </Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router basename="/image-randomizer">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/randomize-images" element={<RandomizeImagesPage />} />
        <Route path="/randomize-words" element={<RandomizeWordsPage />} />
      </Routes>
    </Router>
  );
};

export default App;