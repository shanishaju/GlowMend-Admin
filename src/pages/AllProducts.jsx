import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import img1 from '../assets/skin-oil5.jpg'
import img2 from '../assets/skin-oil1.jpg'
import img3 from '../assets/skin-oil6.jpg'
import img4 from '../assets/skin-oil-3.jpg'





function AllProducts() {

    //modal start
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //modal end    
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
                                <Button size="small" className='me-4 text-light' onClick={handleOpen} >Edit</Button>
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
                                <Button size="small" className='me-4 text-light' onClick={handleOpen} >Edit</Button>
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
                                <Button size="small" className='me-4 text-light' onClick={handleOpen}>Edit</Button>
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
                                <Button size="small" className='me-4 text-light' onClick={handleOpen}>Edit</Button>

                                <Button size="small" className='p-1 text-light' >Delete</Button>

                            </CardActions>
                        </Card>
                        
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >


                            <Stack className='hii'
                                sx={{
                                    backgroundColor: "",
                                    padding: "30px",
                                    borderRadius: "12px",
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: " 50%",
                                    border: '0px solid #000',
                                    boxShadow: 24,
                                    pt: 2,
                                    px: 4,
                                    pb: 3,
                                }}
                            >
                                <p className='text-light ms-4 mt-3' style={{ fontSize: "32px", fontWeight: "bold" }} >Update Product</p>

                                <Stack
                                    sx={{
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        justifyContent: "space-between",
                                    }}
                                >

                                    <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                        <TextField id="outlined-basic" label="Product Name" variant="outlined" color="light" name="name" />
                                    </Stack>

                                    <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                        <TextField id="outlined-basic" label="Category" variant="outlined" color="blue" name="category" />
                                    </Stack>

                                    <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                        <TextField id="outlined-basic" label="$ Price" variant="outlined" color="blue" name="category" />
                                    </Stack>

                                    <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                        <TextField id="outlined-basic" label="Description" variant="outlined" color="blue" name="description" />
                                    </Stack>

                                    <Stack sx={{ flexDirection: "row" }}>


                                        <Stack sx={{ width: "220%", marginBottom: "2%", flexDirection: "row", justifyContent: "right", backgroundColor: "#a3706b96", borderRadius: "10px" }} >
                                            <label
                                                htmlFor="file-upload"
                                                style={{
                                                    cursor: "pointer",
                                                    width: "200px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <img
                                                    className="m-4"
                                                    src="../src/assets/uploadRemovebg.png"
                                                    alt="addprodut-thumbnail"
                                                    width="30%"
                                                />
                                            </label>
                                            <input
                                                // onChange={imageHandler}
                                                type="file"
                                                name="image"
                                                id="file-upload"
                                                hidden
                                            />
                                        </Stack>
                                    </Stack>


                                    <Stack
                                        sx={{
                                            width: "100%",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            sx={{

                                                widht: "auto",
                                                backgroundColor: "white",
                                                color: "#000",
                                                padding: "15px 30px",
                                                "&:hover": {
                                                    backgroundColor: "#000",
                                                    color: "#fff",
                                                },
                                            }}
                                        >
                                            Update
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Modal>
                    </Stack>

                </Stack>

            </Stack>



        </div>
    )
}

export default AllProducts
