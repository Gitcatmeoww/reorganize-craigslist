import './SearchBar.css';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function SearchBar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    {/* Logo & Name */}
                    <Grid item xs={7}>
                        <img alt='logo' id='logo' src='https://1000logos.net/wp-content/uploads/2020/11/Craigslist-emblem.jpg' />
                        <img alt='name' id='name' src='https://1000logos.net/wp-content/uploads/2020/11/Craigslist-logo.png' />
                    </Grid>

                    {/* Search Bar */}
                    <Grid item xs={3}>    
                        <form>
                            <input type="search" placeholder='Search'/>
                        </form>
                    </Grid> 
                    
                    {/* Create Post */}
                    <Grid item xs={2}>
                        <button type="button"> Create Posting </button>
                    </Grid>
                </Grid>
            </Box>        
        </>
    )
}

export default SearchBar;