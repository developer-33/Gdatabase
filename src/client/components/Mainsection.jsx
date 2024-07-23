
import SignIn from './Login';
import { Routes, Route } from "react-router-dom";
import GunDisplay from './GunDisplay';
import News from './News';
import AdminDashboard from './AdminDashboard';
import HomePage from './HomePage';
// import Carousel from './Carousel';
// import Card from './card';

const Mainsection = ( {toggleDarkMode }) => {
 


    return (
        <div>
        <Routes>
          <Route path="/home" element={<HomePage toggleDarkMode />} />
          <Route  path="/login" element={<SignIn toggleDarkMode/>}  /> 

          <Route  path="/gundisplay" element={<GunDisplay toggleDarkMode />} />
            <Route  path="/News"element={<News toggleDarkMode/> } />
             <Route path="/admindashboard" element={<AdminDashboard  toggleDarkMode/>}   />
             {/* <Route path="/card" element={<Card toggleDarkMode/>}   /> */}
             {/* <Route path="/Carousel" element={<Carousel toggleDarkMode/>}   /> */}
          
          
          {/* <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} /> */}
            
         
    
           
             
     
             
        
         
           
      
      
            
      
    </Routes>
       
            
    </div>
   

  )
}

export default Mainsection