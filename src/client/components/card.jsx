import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card1 = ({ imageSrc, title, description,link,type }) => {
    const navigate = useNavigate();

        return (
            <div className="max-w-sm
             bg-yellow-400
              border-black
              rounded-lg shadow
               dark:bg-black
                dark:border-white">
               <a href={link} onClick={(e) =>{
                e.preventDefault();
                navigate("/image", {state:{imageSrc, title} })
                }}>
              <img className=
              "rounded-t-lg "
               src={imageSrc} alt={title} />
               
                  
                </a>


                


                 



                





                <div className="p-5">
                    {/* <a href="#"> */}
                        <h5 className="mb-2 text-2xl font-bold tracking-tight
                         text-black
                          dark:text-yellow-400">
                            {title}
                        </h5>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight
                          text-white
                           dark:text-yellow-400">
                    
                        </h5>
                    {/* </a> */}
                    <p className="mb-3 font-normal 
                     text-black
                      dark:text-yellow-400">
                        {description}
                    </p>
                    <p className="mb-3 font-normal 
                     text-black
                      dark:text-yellow-400">
                        {type}
                    </p>
                    <a 
                        href="#" 
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
                        // text light
                         text-black
                          bg-yellow-400 rounded-lg
                           border-white
                            hover:bg-black focus:ring-4
                             focus:outline-black
                            hover:text-yellow-400
                            focus:ring-white
                             dark:border-white
                             dark:bg-yellow-400
                              dark:hover:bg-black
                              dark:hover:text-yellow-400
                               dark:focus:ring-white"
                    >
                        Read more
                        <svg 
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 14 10"
                        >
                            <path 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        );
    }

export default Card1;