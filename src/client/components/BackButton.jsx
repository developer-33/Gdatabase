import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="px-4 py-2 bg-yellow-400
       text-black rounded
       dark:text-yellow-400
       dark:bg-black
       hover:text-yellow-400
        hover:bg-black"
    >
      Back
    </button>
  );
};

export default BackButton;