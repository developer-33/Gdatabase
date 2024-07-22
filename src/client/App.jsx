import { useState,useEffect} from 'react';
import Mainsection from './components/Mainsection';
import  Example from './components/NavBar'

import "./index.css"



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      {/* <button 
        onClick={toggleDarkMode} 
        className="mb-4 p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
      >
        Toggle Dark Mode
      </button> */}
      <Example isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
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
