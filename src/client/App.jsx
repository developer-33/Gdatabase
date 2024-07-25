import { useState,useEffect} from 'react';
import Mainsection from './components/Mainsection';
import  NavBar from './components/NavBar'
import "../guns/ak-47.png"
import "../guns/ASM10.png"
import "../guns/BK57.PNG"
import "../guns/dr-h.png"
import "../guns/fr.556.png"
import "../guns/hbra3.png"
import "../guns/hvk-30.png"
import "../guns/ICR-1.PNG"
import "../guns/kn44.png"
import "../guns/LK24.PNG"
import "../guns/M16.PNG"
import "../guns/man0war.png"
import "../guns/M4.PNG"
import "../guns/Type25.PNG"


import "./index.css"



function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Read dark mode preference from local storage
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode === 'true';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App bg-yellow-400 dark:bg-black text-black dark:text-yellow-400 min-h-screen">
      {/* <button 
        onClick={toggleDarkMode} 
        className="mb-4 p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
      >
        Toggle Dark Mode
      </button> */}

      
      <NavBar isDarkMode={isDarkMode}   toggleDarkMode={toggleDarkMode} />
     
      <Mainsection />
    </div>
  );
}

export default App;


// function App() {
  


//   return (
//     <div className='App'>

//     <Example />
         
//    <MainSection />
     
            
       
//     </div>
//   );
// }

// export default App;
