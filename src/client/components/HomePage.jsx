
import React from "react";
 import warzone from "../assets/warzonw1.jpg"
   
const HomePage = () => {
 
  const footerBackgroundImage = warzone;

 

  

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${footerBackgroundImage})` }}
    >
      <h1 className="text-white text-4xl">Footer Section</h1>
    </div>
    
    
  )

}
export default HomePage







