import { useState } from 'react'
import Cards from "./Cards.jsx"
import Bfc from "./BodyFat.jsx"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cards/>
     <Bfc/>

    </>
  )
}

export default App
