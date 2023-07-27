
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Income from './Pages/Income'
import Expense from './Pages/Expense'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element ={<HomePage/>}/>
        <Route path='/income' element ={<Income/>}/>
        <Route path='/expense' element ={<Expense/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
