import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import img1 from '../assets/skin-oil5.jpg'
import img2 from '../assets/skin-oil1.jpg'
import img3 from '../assets/skin-oil6.jpg'
import img4 from '../assets/skin-oil-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';




function AllProducts() {
    return (
        <div className='ms-5 me-5 rounded-4 ' style={{ width: "80%", backgroundColor: "", height: "79vh" }}>
            <Stack>
                <Stack
                    sx={{
                        backgroundColor: "#a3706b96",
                        padding: "30px",
                        borderRadius: "12px",
                    }}
                >
                    <p className='text-light ms-4 mt-3' style={{ fontSize: "32px", fontWeight: "bold" }} >All Products</p>

                    <Stack
                        sx={{
                            flexDirection: "row",
                            padding: "30px",

                        }}>
                        <Card sx={{
                            maxWidth: 250, marginRight: "20px"
                        }}>
                            <CardMedia
                                sx={{ height: 150 }}
                                image={img1}
                                title="img1 "
                            />
                            <CardContent style={{ backgroundColor: "#a3706b96" }}>
                                <Typography gutterBottom variant="h6" component="div">
                                    Eucalyptus Oil
                                </Typography>
                            </CardContent>
                            <CardActions style={{ backgroundColor: "#a3706b96" }}>
                                <Button size="small" className='me-4 text-light' >Edit</Button>
                                <Button size="small" className='p-1 text-light' >Delete</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 250, marginRight: "20px" }}>
                            <CardMedia
                                sx={{ height: 150 }}
                                image={img2}
                                title="img1 "
                            />
                            <CardContent style={{ backgroundColor: "#a3706b96" }}>
                                <Typography gutterBottom variant="h6" component="div">
                                    Lemon Oil
                                </Typography>
                            </CardContent>
                            <CardActions style={{ backgroundColor: "#a3706b96" }}>
                                <Button size="small" className='me-4 text-light' >Edit</Button>
                                <Button size="small" className='p-1 text-light' >Delete</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 250, marginRight: "20px" }}>
                            <CardMedia
                                sx={{ height: 150 }}
                                image={img3}
                                title="img1 "
                            />
                            <CardContent style={{ backgroundColor: "#a3706b96" }}>
                                <Typography gutterBottom variant="h6" component="div">
                                    Lavender Oil
                                </Typography>
                            </CardContent>
                            <CardActions style={{ backgroundColor: "#a3706b96" }}>
                                <Button size="small" className='me-4 text-light' >Edit</Button>
                                <Button size="small" className='p-1 text-light' >Delete</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 250, marginRight: "20px" }}>
                            <CardMedia
                                sx={{ height: 150 }}
                                image={img4}
                                title="img1 "
                            />
                            <CardContent style={{ backgroundColor: "#a3706b96" }}>
                                <Typography gutterBottom variant="h6" component="div">
                                    Oregano Oil
                                </Typography>
                            </CardContent>
                            <CardActions style={{ backgroundColor: "#a3706b96" }}>
                                <Button size="small" className='me-4 text-light' >Edit</Button>
                                <Button size="small" className='p-1 text-light' >Delete</Button>
                            </CardActions>
                        </Card>
                    </Stack>

                </Stack>

            </Stack>


        </div>
    )
}

export default AllProducts
