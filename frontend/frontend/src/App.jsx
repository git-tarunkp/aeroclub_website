import Login from "./Login"
import Signup from "./Signup"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'
import Homex from "./Homex"
import Addact from "./Addact"
import Clubmem from "./Clubmem"
import Addclubmem from "./addclubmem"
import Clubheads from "./Clubheads"
import Addclubheads from "./addclubheads"
import Addclubprojects from "./addclubprojects"
import Clubprojects from "./Clubprojects"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/register" element={<Signup />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/homex" element={<Homex/>}></Route>
        <Route path='/addact' element={<Addact/>}></Route>
        <Route path='/clubmem' element={<Clubmem/>}></Route>
        <Route path='/addclubmembers' element={<Addclubmem/>}></Route>
        <Route path='/clubheads' element={<Clubheads/>}></Route>
        <Route path='/addclubheads' element={<Addclubheads/>}></Route>
        <Route path='/addclubprojects' element={<Addclubprojects/>}></Route>
        <Route path='/clubprojects' element={<Clubprojects/>}></Route>
        

        
      </Routes>
    </BrowserRouter>
  )
}

export default App
