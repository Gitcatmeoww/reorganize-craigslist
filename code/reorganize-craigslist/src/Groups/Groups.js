import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


// Following codes adapted from: https://mui.com/material-ui/react-card/
function Groups() {

    return (
        <Grid container spacing={20}>
            <Grid item xs={6}>
                <Box display="flex" justifyContent="flex-end">
                    <Card sx={{ width: 380 }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ydW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt="online"
                        />
                        <CardContent sx={{ height: 12 }}>
                            <Typography align="left" component="div" sx={{ fontSize: 18, fontWeight: 'bold', color: '#800080', position: 'relative', left: 20 }}>
                                Online Groups
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href="https://forums.craigslist.org/?areaID=1" underline="none">
                                <Button size="small">Learn More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>

            <Grid item xs={6}>
                <Box display="flex" justifyContent="flex-start">
                    <Card sx={{ width: 380 }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt="offline"
                        />
                        <CardContent sx={{ height: 12 }}>
                            <Typography align="left" component="div" sx={{ fontSize: 18, fontWeight: 'bold', color: '#800080', position: 'relative', left: 20 }}>
                                Offline Groups
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href="https://sfbay.craigslist.org/search/grp#search=1~list~0~0" underline="none">
                                <Button size="small">Learn More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Groups;