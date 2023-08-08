import React from 'react';
import Home from './routes/Home';
import Pokemon from './routes/Pokemon';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './styles.css';

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;