
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (

     // <div className="App bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
 {/* <button 
        onClick={toggleDarkMode} 
        className="mb-4 p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
      >
        Toggle Dark Mode
      </button> */}



      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Burton Creations
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

 
