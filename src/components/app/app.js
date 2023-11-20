import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from '../shop/shop'

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
            <Routes>
                <Route/>
            </Routes>
            <Shop/>
        </BrowserRouter>
    </div>
  )
}

export default App