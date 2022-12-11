import './SearchBar.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


function SearchBar() {

    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    }


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
                        <form action={`https://www.searchcraigslist.net/results?q=${query}`} method="post">
                            <input onChange={handleChange} type="search" placeholder='Search'/>
                        </form>
                    </Grid> 
                    
                    {/* Create Post */}
                    <Grid item xs={2}>
                        <Link href="https://post.craigslist.org/k/Nigbi-N47RG5ZHZuKY1qPQ/nulWE?s=subarea" underline="none">
                            <button type="button"> Create Posting </button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>        
        </>
    )
}

export default SearchBar;