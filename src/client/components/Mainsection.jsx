
import SignIn from './Login';
import { Routes, Route } from "react-router-dom";
import GunDisplay from './GunDisplay';
import News from './News';
import AdminDashboard from './AdminDashboard';
import HomePage from './HomePage';

const Mainsection = ({ token, setToken, admin, setAdmin, user, setUser}) => {
 


    return (
        <div>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route  path="/login" element={<SignIn  token={token} setToken={setToken} />}  /> 

          <Route  path="/gundisplay" element={<GunDisplay token={token} setToken={setToken}  />} />
            <Route  path="/News"element={<News token={token} user={user} />}   />
             <Route path="/admindashboard" element={<AdminDashboard  token={token} user={user} />}   />
          
          
          {/* <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} /> */}
            
         
    
           
             
     
             
        
         
           
      
      
            
      
    </Routes>
  
            
    </div>
 
  )
}

export default Mainsection