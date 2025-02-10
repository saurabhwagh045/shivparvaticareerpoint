import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Title from './Components/Title/Title'
import Home from './Components/Home/Home'
import Programs from './Components/Programs/Programs'

const App = () => {
  return (
    <div>
      <Navbar /> 
      
      <Home />
      <Title subTitle='Our Program' title='What We Offer' />
      <Programs />
    </div>
  )
}

export default App
