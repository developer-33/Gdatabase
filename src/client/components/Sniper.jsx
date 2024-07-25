import React from 'react'
import ResponsiveGridWithMoreCards from './SniperRifels';
import call2 from '../assets/call5.jpg'

 function SniperGuns () {
  
 const heroBackgroundImage = call2;
  return (
    <div
  className="h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBackgroundImage})` }}
>
  <h1 className="text-white text-4xl"></h1>
</div>
  )
}

export default SniperGuns