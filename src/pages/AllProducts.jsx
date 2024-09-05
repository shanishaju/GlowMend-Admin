import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { allProductApi, deleteProductApi, editProjectApi } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';

function AllProducts() {
    // State to store all products
    const [allProducts, setAllProducts] = useState([]);
    const [deleteStatus, setDeleteStatus] = useState(false); // auto refresh after delete
    const [updateStatus, setupdateStatus] = useState(false); // auto refresh after update


    // State to manage edit product data
    const [editProduct, setEditProduct] = useState({
        id: '', 
        productName: '', 
        category: '', 
        price: '', 
        description: '', 
        productImage: ''
    });

    // Modal state
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Fetch all products from the server
    const getHomeProducts = async () => {
        const result = await allProductApi();
        setAllProducts(result.data);
    };

    // Handle delete product
    const handleDelete = async (id) => {
        const result = await deleteProductApi(id);
        if (result.status === 200) {
            setDeleteStatus(true);
        }
    };

    // Handle edit button click
    const handleEdit = (selectedItem) => {
        setEditProduct({
            id: selectedItem._id, // Ensure this is the correct id field
            productName: selectedItem.productName,
            category: selectedItem.category,
            price: selectedItem.price,
            description: selectedItem.description,
            productImage: selectedItem.productImage
        });
        handleOpen(); 
    };

    // Handle update button
    const handleUpdate = async (e) => {
        e.preventDefault();

        const { productName, category, price, description, productImage } = editProduct;

        // Check if all fields are filled
        if (!productName || !category || !price || !description || !productImage) {
            alert("Please fill all the fields");
            return;
        }

        try {
            const result = await editProjectApi(editProduct.id, editProduct);
            if (result.status === 200) {
                alert("Update completed");
                handleClose(); // Close modal on success
                setupdateStatus(true)
            } else {
                alert("Update failed. Please try again.");
            }
        } catch (error) {
            console.error("Error updating product:", error);
            alert("An error occurred while updating the product.");
        }
    };

    useEffect(() => {
        getHomeProducts();
        setDeleteStatus(false); // Refresh after delete
        setupdateStatus(false)
    }, [deleteStatus,updateStatus]);
    //modal end  

    return (
        <div className='ms-5 me-5 rounded-4 ' style={{ width: "80%", backgroundColor: "", height: "auto" }}>
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
                            flexWrap: "wrap",

                        }}>
                        {/* conditinaly rendering card */}
                        {allProducts?.length > 0 ?
                            allProducts?.map((item) => (
                                <Card
                                    key={item.id}
                                    sx={{
                                        maxWidth: 250, marginRight: "20px", marginTop: "10px"
                                    }}>
                                    <CardMedia
                                        sx={{ height: 150 }}
                                        image={`${serverUrl}/uploads/${item.productImage}`}
                                        title="img1 "
                                    />
                                    <CardContent style={{ backgroundColor: "#a3706b96" }}>
                                        <Typography gutterBottom variant="h6" component="div"
                                            sx={{ textAlign: "center" }}
                                        >
                                            {item.productName}
                                        </Typography>
                                        <Typography variant="body1" component="p" sx={{ textAlign: "center" }}
                                        >
                                            ${item.price}
                                        </Typography>
                                        {/* <Typography variant="body2" color="textSecondary" component="p">
                                            {item.description}
                                        </Typography> */}
                                        {/* <Box display="flex" justifyContent="space-between">
                                            <Typography variant="body2" color="textSecondary" component="p">
                                             {item.category}
                                            </Typography>
                                            <Typography variant="body1" component="p">
                                                ${item.price}
                                            </Typography>
                                        </Box> */}


                                    </CardContent>
                                    <CardActions style={{ backgroundColor: "#a3706b96" }}>
                                        <Button size="small" type='button' className='me-4 text-light' onClick={() => { handleEdit(item); handleOpen() }}  >Edit</Button>
                                        <Button size="small" type='button' className='p-1 text-light' onClick={() => handleDelete(item?._id)} >Delete</Button>
                                    </CardActions>
                                </Card>
                            ))
                            : null
                        }

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >

                            <Stack
                                sx={{
                                    backgroundColor: " #76453f",
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
                                        <TextField id="outlined-basic" label="Product Name" variant="outlined" color="light" name="name" value={editProduct.productName} onChange={(e) => setEditProduct({ ...editProduct, productName: e.target.value })} />
                                    </Stack>

                                    <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                        <TextField id="outlined-basic" label="Category" variant="outlined" color="blue" name="category" value={editProduct.category} onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value })} />
                                    </Stack>

                                    <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                        <TextField id="outlined-basic" label="$ Price" variant="outlined" color="blue" name="price" value={editProduct.price} onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })} />
                                    </Stack>

                                    <Stack sx={{ width: "49%", marginBottom: "2%" }}>
                                        <TextField id="outlined-basic" label="Description" variant="outlined" color="blue" name="description" value={editProduct.description} onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })} />
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
                                                // onChange={(e)=>handleUpload()}
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
                                            onClick={handleUpdate}
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
