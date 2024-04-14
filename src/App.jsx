import React from 'react'
import Section from './Component/Section'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Section2 from './Component/Section2'
import Sections3 from './Component/Sections3'
import Math from './Component/Math'
import Rating from './Component/Rating'
import Loading from './Component/Loading'
import Foundation from './Foundation'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/"  element ={<Section/>}/>
    <Route path="/Continue"  element ={<Section2/>}/>
     <Route path="/Continue2"  element ={<Sections3/>}/>
    <Route path="/math"  element ={<Math/>}/>
    <Route path="/rating"  element ={<Rating/>}/>
    <Route path="/loading" element={<Loading/>}/>
    <Route path ="/Home" element={<Section/>}/>
    <Route path="/sec2" element={<Section2/>}/>
    <Route path="/sec3" element={<Sections3/>}/>
    <Route path="/maths" element={<Math/>}/> 
    <Route path="/found" element={<Foundation/>}/>
    
    
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
