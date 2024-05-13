import React from 'react'
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<landing />} />
        </Routes>
    </div>
  
  )}

export default App
