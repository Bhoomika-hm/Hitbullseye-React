import React from 'react'
import Input from './Component/Input'
import 'bootstrap/dist/css/bootstrap.css'
import Display from './Component/Display'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
        <h1 className='heading'>Fitness Club Registration</h1>
        <Routes>
          <Route  path= "/" element={<Input />}></Route>
          <Route  path= "/display" element={<Display />}></Route>
        </Routes>
    </div>
  )
}

export default App
