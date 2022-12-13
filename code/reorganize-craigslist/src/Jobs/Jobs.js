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
function Jobs() {

    return (
        <Grid container spacing={20}>
            <Grid item xs={6}>
                <Box display="flex" justifyContent="flex-end">
                    <Card sx={{ width: 380 }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image="https://images.unsplash.com/photo-1584476318078-d38baa6edb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8SElSRXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt="haveJob"
                        />
                        <CardContent sx={{ height: 12 }}>
                            <Typography align="left" component="div" sx={{ fontSize: 18, fontWeight: 'bold', color: '#800080', position: 'relative', left: 20 }}>
                                I HAVE a job
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href="https://sfbay.craigslist.org/search/jjj#search=1~thumb~0~0" underline="none">
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
                            image="https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHJlY3J1aXRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="needJob"
                        />
                        <CardContent sx={{ height: 12 }}>
                            <Typography align="left" component="div" sx={{ fontSize: 18, fontWeight: 'bold', color: '#800080', position: 'relative', left: 20 }}>
                                I NEED a job
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href="https://sfbay.craigslist.org/search/rrr#search=1~thumb~0~0" underline="none">
                                <Button size="small">Learn More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Jobs;