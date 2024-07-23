
import React from "react";
 
   
const HomePage = () => {
 
  const footerBackgroundImage = '/src/client/assets/call1.jpeg';

 

  

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







