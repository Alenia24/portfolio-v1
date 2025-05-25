import { Routes, Route } from 'react-router-dom'

import './App.css'

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
