import React, { useState } from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


// Following codes adapted from: https://mui.com/x/react-date-pickers/date-picker/
function Activities() {
    const [date, setDate] = useState(dayjs(new Date()));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Button color="secondary" size="large" sx={{ fontSize: 16, fontWeight: "bold", width: 200, position: "absolute", left: 150, top: 300 }}>
                        Event Calendar
                    </Button>
                    <Box sx={{ position: "absolute", left: 65, top: 350 }}>
                        <Link href={`https://sfbay.craigslist.org/search/eee?sale_date=${date.format("YYYY-MM-DD")}#search=1~thumb~0~0`} underline="none">
                            <CalendarPicker date={date} onChange={(newDate) => { setDate(newDate) }} />
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        
                        {/* Arts */}
                        <Grid item xs={6}>
                            <Card sx={{ width: 330 }}>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                                    alt="arts"
                                />
                                <CardContent sx={{ height: 8 }}>
                                    <Typography align="left" component="div" sx={{ fontSize: 18, fontWeight: 'bold', color: '#800080', position: 'relative', left: 20 }}>
                                        Arts
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href="https://sfbay.craigslist.org/search/ats#search=1~list~0~0" underline="none">
                                        <Button size="small">Learn More</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>

                        {/* Classes */}
                        <Grid item xs={6}>
                            <Card sx={{ width: 330 }}>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image="https://images.unsplash.com/photo-1560541907-4d0de680e3a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt="classes"
                                />
                                <CardContent sx={{ height: 8 }}>
                                    <Typography align="left" component="div" sx={{ fontSize: 18, fontWeight: 'bold', color: '#800080', position: 'relative', left: 20 }}>
                                        Classes
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href="https://sfbay.craigslist.org/search/cls#search=1~thumb~0~0" underline="none">
                                        <Button size="small">Learn More</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>

                        {/* Travel */}
                        <Grid item xs={6}>
                            <Card sx={{ width: 330 }}>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                                    alt="travel"
                                />
                                <CardContent sx={{ height: 8 }}>
                                    <Typography align="left" component="div" sx={{ fontSize: 18, fontWeight: 'bold', color: '#800080', position: 'relative', left: 20 }}>
                                        Travel
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href="https://sfbay.craigslist.org/search/rid#search=1~list~0~0" underline="none">
                                        <Button size="small">Learn More</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>

                        {/* Volunteers */}
                        <Grid item xs={6}>
                            <Card sx={{ width: 330 }}>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dm9sdW50ZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="volunteers"
                                />
                                <CardContent sx={{ height: 8 }}>
                                    <Typography align="left" component="div" sx={{ fontSize: 18, fontWeight: 'bold', color: '#800080', position: 'relative', left: 20 }}>
                                        Volunteers
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href="https://sfbay.craigslist.org/search/vol#search=1~list~0~0" underline="none">
                                        <Button size="small">Learn More</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
}

export default Activities;