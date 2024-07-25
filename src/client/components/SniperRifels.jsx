
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// Assuming Item is a styled Paper component from MUI
import GunCard from './MarksMan'; // Adjust the import path according to your project structure
import sniper from "../assets/ak-47.png"
function ResponsiveGridWithMoreCards() {
  const gunCards = Array.from({ length: 26 }, (_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <GunCard
        gunName={`Gun ${index + 1}`}
        gunClass="Assault"
        imagePath={`${sniper} ${index + 1}.png`}
        description={`Description for Gun ${index + 1}`}
      />
    </Grid>
  ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {gunCards}
      </Grid>
    </Box>
    
  );
 
}

export default ResponsiveGridWithMoreCards;

