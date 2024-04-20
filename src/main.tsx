import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './Landing.tsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
