import React from 'react';
import { Container, Grid, Typography,Box } from '@mui/material';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import { useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';


const TargetPage = () => {
  const location = useLocation();
  const { note } = location.state || {};
  if (!note) {
    return <div>Loading...</div>; // Render a loading state or handle the absence of data
  }
  return (
    
    <div>
       
       <Box class="header">
        <Typography variant="h4" gutterBottom class="head" >
          <AutoStoriesRoundedIcon style={{ fontSize: '1.5rem', verticalAlign: 'middle', marginRight: '8px' }}></AutoStoriesRoundedIcon>{note.title}
       
          
        </Typography>
        <Box sx={{ position: 'relative' }}>
      
                  <Box
                    sx={{
                      position: 'fixed',
                      top: '20px',
                      right: '20px',
                      zIndex: 9999,
                    }}
                  >
                <Link to="/"><HomeIcon style={{ color: 'white' }}></HomeIcon></Link>
             </Box>
           </Box>
      </Box>
      <div>
        {note.notes} 
      </div>
    </div>
  );
};

export default TargetPage;
