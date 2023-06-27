import React from 'react'
import {Routes,Route} from "react-router-dom"
import AddTodo from '../pages/AddTodo'
import Home from '../pages/Home'
import RenderTodo from '../pages/RenderTodo'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/addTodo' element={<AddTodo/>}/>
            <Route path='/allTodo' element={<RenderTodo/>}/>
        </Routes>
    </div>
  )
}
