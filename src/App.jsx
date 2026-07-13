import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewCars from './components/ViewCars'
import AddCar from './components/AddCar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ViewCars/>}/>
      <Route path='/view' element={<ViewCars/>}/>
      <Route path='/add' element={<AddCar/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App