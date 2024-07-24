import React from 'react';
import BackButton from './BackButton';
import { useLocation } from 'react-router-dom';

const ImageComponent = () =>{
    const location = useLocation();
    const { imageSrc, title } = location.state;

 
  return (
    <div className="relative w-full h-screen">
      <img
        src={imageSrc}
         alt={title} 
       
        // className="object-cover w-full h-full"
      />
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>
    </div>
  );
};

export default ImageComponent;