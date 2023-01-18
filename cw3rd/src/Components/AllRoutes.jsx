import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'

 function AllRoutes() {
  return (
    <div>
<Routes>
  {/* <Route path='/' element={<Login/>}/> */}
  <Route path='/login' element={<Login/>}/>
  <Route path='/user' element={<Login/>}/>
  <Route path='/products' element={<Login/>}/>
</Routes>
        
    </div>
  )
}
export default AllRoutes