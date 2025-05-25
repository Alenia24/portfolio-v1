import { Routes, Route } from 'react-router-dom'

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/about" />
        <Route path="/projects" />
        <Route path="/contact" />
      </Routes>
    </>
  );
}

export default App
