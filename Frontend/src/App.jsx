import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./Cards.jsx"
import Bfc from "./BodyFat.jsx"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        
          
          <Route path="/bmi" element={<Cards />} />
          <Route path="/bfc" element={<Bfc />} />
       
       
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
