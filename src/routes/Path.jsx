import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Image from '../components/home/Image'
import Carousel from '../components/home/Carousel'
import Parallax from '../components/home/Parallax'

const Path = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}>
              <Route index element={<Image/>}/>
              <Route path='image' element={<Image/>}/>
              <Route path='carousel' element={<Carousel/>}/>
              <Route path='parallax' element={<Parallax/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default Path