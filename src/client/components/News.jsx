import React from 'react'
import call2 from "../assets/call2.webp"
const News = () => {

 const heroBackgroundImage = call2;
 

  return (

      // <div className="h-screen bg-cover bg-center bg-hero-pattern">
      //   <h1 className="text-blue text-4xl">Hero Section</h1>
      // </div>
  
  <div
  className="h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBackgroundImage})` }}
>
  <h1 className="text-white text-4xl"></h1>
</div>
  )
}

export default News