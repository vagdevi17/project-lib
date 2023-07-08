import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Typography,Box } from '@mui/material';
import './library.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import { Link } from 'react-router-dom';
import { Margin } from '@mui/icons-material';

const Library = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('https://api.gyanibooks.com/library/get_dummy_notes');
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }
  , []);
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <Box class="header">
        <Typography variant="h4" gutterBottom class="head" >
          <AutoStoriesRoundedIcon style={{ fontSize: '1.5rem', verticalAlign: 'middle', marginRight: '8px' }}></AutoStoriesRoundedIcon>Library Notes
        </Typography>
      </Box>
      <Container sx={{ flex: '1 0 auto' }}>
        <Grid container spacing={2}>
          {notes.map((note) => (
            <Grid item xs={14} sm={8} md={6} key={note.id}>
              <div>
                <Typography variant="h6" gutterBottom class="title">
                 <MenuBookIcon style={{ fontSize: '1.5rem', verticalAlign: 'middle', marginRight: '8px' }} ></MenuBookIcon><Link  class = "link"to="/target" state={ {note:note} }>{note.title}</Link> 
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {note.description}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box class="footer" >
        <Typography variant="body2" color="text.secondary">
          This is the footer content.
        </Typography>
      </Box>
    </Box>
  );
};

export default Library;
