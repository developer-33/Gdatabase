import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


const LightDarkMode = () => {
  return (
    <div className="text-2xl font-bold">
    <button 
    onClick={toggleDarkMode} 
    className="p-2 bg-yellow-400
     dark:bg-black
      text-black
       dark:text-yellow-400"
  >
    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="mr-2" />
    {isDarkMode ? '' : ''}
  </button>
  </div>
       
  )
}

export default LightDarkMode