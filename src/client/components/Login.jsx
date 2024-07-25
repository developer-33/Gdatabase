import React, { useState } from 'react';





// <div
// className="h-screen bg-cover bg-center"
// style={{ backgroundImage: `url(${heroBackgroundImage})` }}
// >
// <h1 className="text-white text-4xl"></h1>
// </div>


const SignIn = () => {

  const heroBackgroundImage2 = '/src/guns/call13.jpg';
  return (
    <section className ="h-screen bg-cover bg-center"style={{ backgroundImage: `url(${heroBackgroundImage2})` }} >
      <div className="flex flex-col
      items-center 
 
      justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="/home" className="flex items-center mb-6 text-4xl font-semibold
         text-yellow-400
          dark:text-yellow-400">
          <img className="w-8 h-8 mr-2" src="/src/client/assets/callLogo.png" alt="logo" />
        Call Of Duty DataBase
        </a>
        <div className="w-full
         bg-yellow-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0
          dark:bg-black
           dark:border-black">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight
             text-black md:text-2xl
              dark:text-yellow-400">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                {/* Email */}
                <label htmlFor="email" className="block mb-2 text-sm font-medium
                 text-black
                  dark:text-yellow-400">Your email</label>

                <input type="email" name="email" id="email" className="bg-white border
                 border-white
                  text-black rounded-lg 
                focus:ring-yellow-400
                 focus:border-yellow-400 block w-full p-2.5
                 dark:bg-black
                  dark:border-yellow-400
                   dark:placeholder-yellow-400
                    dark:text-yellow-400
                     dark:focus:ring-black
                      dark:focus:border-black" placeholder="name@company.com" required />
              </div>

              <div>
                 {/* Password */}
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black
                 dark:text-yellow-400">Password</label>

                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white border
                 border-yellow-400
                  text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                   dark:bg-black
                    dark:border-yellow-400
                     dark:placeholder-yellow-400
                      dark:text-yellow-400
                       dark:focus:ring-black
                        dark:focus:border-black" required />
              </div>
              
              {/* Remember me */}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-black rounded bg-yellow-400 focus:ring-3 focus:ring-yellow-300 dark:bg-yellow-400 dark:border-yellow-400 dark:focus:ring-yellow-400 dark:ring-offset-yellow-400" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-black dark:text-yellow-400">Remember me</label>
                  </div>
                </div>
             
                {/* Forgot Password */}
                <a href="#" className="text-sm font-medium text-black hover:underline dark:text-yellow-500">Forgot password?</a>
              </div>


              <button type="submit" className="w-full text-black bg-white hover:bg-black  hover:text-white focus:ring-4 focus:outline-yellow-400 focus:ring-yellow-400 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-black dark:hover:bg-yellow-400 dark:text-yellow-400 dark:hover:text-black dark:focus:ring-black">Sign in</button>
              <p className="text-sm font-light text-black dark:text-yellow-400">
                Don’t have an account yet? <a href="#" className="font-lg text-black hover:underline dark:text-yellow-400">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
  
    </section>
    
  );
}

export default SignIn;

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const login = async() => {
//     try {
//         const response = await fetch('http://localhost:3000/api/users/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type' : 'application/json'
//             }, 
//             body: JSON.stringify({
//                 email,
//                 password
//             })
//         });
//         const result = await response.json();
//         setMessage(result.message);
//         if(!response.ok) {
//           throw(result)
//         }
//         setEmail('');
//         setPassword('');
//     } catch (err) {
//         console.error(`${err.name}: ${err.message}`);
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login();
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor='email'>Email:</label>
//           <input
//             type='email'
//             id='email'
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor='password'>Password:</label>
//           <input
//             type='password'
//             id='password'
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>
//         <button type='submit'>Login</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default Login;
