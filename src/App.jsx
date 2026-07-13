import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewCars from './components/ViewCars'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ViewCars/>}/>
      <Route path='/view' element={<ViewCars/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
