import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Cafe from './Pages/Cafe'
import ExpStarbuck from './Pages/ExpStarbuck'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/cafe' element={<Cafe />} />
      <Route path='/experiencia' element={<ExpStarbuck />} />
      <Route path='*' element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
